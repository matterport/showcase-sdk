---
layout: default
title: Setup
nav_exclude: true
search_exclude: true
nav_order: 1
---

- [Return to Tutorials](..)
{: .text-epsilon }

In order to go through the tutorials, you will need to setup a static file server.

- **Download and install the [showcase sdk tutorial repository](https://github.com/matterport/showcase-sdk-tutorial)**
```shell
git clone git@github.com:matterport/showcase-sdk-tutorial.git
cd showcase-sdk-tutorial
yarn install
```

- **Download and extract the latest Bundle SDK**
```shell
curl https://static.matterport.com/misc/bundle/showcase/3.0.25.22-524-g521559dd5/showcase-bundle.tar.gz -o bundle.tar.gz
tar -xzf bundle.tar.gz -C ./bundle
```

- **Start the server**
```shell
yarn start
```

- **Launch <http://localhost:8000/>{:target="_blank"}**<br>
Open the debug console and you should see:<br>`Hello Bundle SDK`
