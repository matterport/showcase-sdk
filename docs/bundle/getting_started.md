---
layout: default
title: Getting Started
nav_exclude: true
search_exclude: true
nav_order: 2
---

- [Return to SDK Bundle Home](../main)
{: .text-epsilon }

# Getting Started
{: .no_toc }

- TOC
{:toc}

# Adding the SDK Bundle to an existing application
## Download the latest SDK Bundle package
<https://static.matterport.com/misc/bundle/showcase/{{ site.latest_bundle_version }}/showcase-bundle.tar.gz>
## Extract the contents of showcase-bundle.tar.gz to a directory where your files will be served
It is important that you preserve the package's file organization.  We recommend that you keep the bundle files under one directory to make it easy to upgrade in the future. <br>
```shell
> cd [path to server root]
> mkdir bundle
> tar -xzf showcase-bundle.tar.gz -C bundle
> ls bundle
css		fonts		js		showcase.html	version.txt
cursors		images		locale		terms
>
```

## Add an iframe to your existing page that targets the `showcase.html` file of the bundle directory
To avoid css conflicts, we are requiring that the showcase be embedded in an iframe. In addition, your server must use https. Replace `[SERVERPATH]` and `[MODEL_SID]` with your own.

``` html
 <iframe id="showcase" width="740" height="480" src="https://[SERVERPATH]/bundle/showcase.html?m=[MODEL_SID]" frameborder=”0” allowfullscreen allow="vr"'></iframe>
```

## Connect to the SDK
Add a script to the page to await the loading of showcase. Connect to it once loaded.

```javascript
var showcase = document.getElementById('showcase');
showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, '{YOUR SDK KEY}', '3.2');
  }
  catch(e) {
    console.error(e);
    return;
  }

  console.log('Hello Bundle SDK', sdk);
});
```
