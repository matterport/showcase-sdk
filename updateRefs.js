const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const decompress = require('decompress');

(async function updateRefence() {
  let version = process.argv[2];

  if (!version) {
    console.error('Error: version not specified');
    process.exit(1)
  }

  if (version === 'qa') {
    version = await getVersionFromEnv('https://qa3-app.matterport.com')
  }

  if (version === 'prod') {
    version = await getVersionFromEnv('https://my.matterport.com');
  }

  const tempDir = path.resolve('./temp');
  const referenceDir = path.resolve('./docs/reference/current');
  console.log(`fetching v${version} reference pages`);

  // remove and recreate the temp directory to empty it
  fs.rmSync(tempDir, {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(tempDir);

  // fetch and write the .zip file to disk
  const zipPath = path.resolve(tempDir, 'docs.zip');
  const res = await fetch(`https://static.matterport.com/showcase-sdk/docs/${version}/docs.zip`);
  const zipIn = fs.createWriteStream(zipPath);
  await new Promise((resolve, reject) => {
    res.body.pipe(zipIn);
    res.body.on('error', reject);
    zipIn.on('finish', resolve);
  });

  // decompress the zip and move the contents into the reference/current directory
  const tempDocsDir = path.resolve(tempDir, 'docs');
  await decompress(zipPath, tempDocsDir);
  fs.rmSync(zipPath);

  fs.rmSync(referenceDir, {
    recursive: true,
    force: true,
  });
  fs.renameSync(tempDocsDir, referenceDir);
})();

async function getVersionFromEnv(env) {
  const res = await fetch(env + '/api/v2/config/showcase_sdk_version');
  const version = JSON.parse(await res.text());
  if (typeof version !== 'string') {
    throw Error('Couldn\'t parse version received ' + JSON.stringify(version));
  }
  return version;
}
