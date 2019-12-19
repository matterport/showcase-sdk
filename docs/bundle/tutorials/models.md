---
layout: default
title: Working with 3D models
nav_exclude: true
search_exclude: true
nav_order: 1
---

- [Return to Tutorials](..)
{: .text-epsilon }

The Bundle SDK supports loading dae, fbx, obj and gltf scene and model assets. Internally, we use the three.js asset loaders.
The loader components download and instantiate the models within the matterport scene. We will be using `async/await` instead of promises in the following examples.

- **Select a model**
The following is a list of urls that you can use for this tutorial.
  {: }

  type: gltf binary<br>
  component: `GLTF_LOADER`<br>
  scale: 0.01<br>
  url: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF-Binary/Duck.glb`
  {: .text-epsilon }

  type: gltf<br>
  component: `GLTF_LOADER`<br>
  scale: 0.01<br>
  url: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/CesiumMan/glTF/CesiumMan.gltf`
  {: .text-epsilon }

  type: obj<br>
  component: `OBJ_LOADER`<br>
  scale: 0.01<br>
  url: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/obj/female02/female02.obj`<br>
  materialUrl: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/obj/female02/female02.mtl`
  {: .text-epsilon }

  type: dae<br>
  component: `DAE_LOADER`<br>
  scale: 0.3<br>
  url: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/collada/stormtrooper/stormtrooper.dae`
  {: .text-epsilon }

  type: fbx<br>
  component: `FBX_LOADER`<br>
  scale: 0.00002<br>
  url: `https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/fbx/stanford-bunny.fbx`
  {: .text-epsilon }

- **Setup your scene**<br>
  Add some lights to your scene, otherwise, your models will be black. We provide a basic lighting component.
  
  Start at <https://github.com/matterport/showcase-sdk-tutorial/blob/master/index.js#L12>{:target="_blank"}
  ```javascript  
  var lights = await sdk.Scene.createNode();
  lights.addComponent('mp.lights');
  lights.start();
  ```

- **Create your component**<br>
  The component name will depend on the model you choose. We will use the stanford bunny.
  ```javascript
  var modelNode = await sdk.Scene.createNode();
  modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
    url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/fbx/stanford-bunny.fbx',
  });
  ```

- **Scale your model**<br>
  Models come in different scales. You will have to adjust them to be the correct size.
  ```javascript
  modelNode.obj3D.scale.set(0.00002, 0.00002, 0.00002);
  ```

- **Position your model within view**<br>
  We will lower it a bit. The default position is 0, 0, 0
  ```javascript
  modelNode.obj3D.position.set(0,-1,0); // drop ~3 feet
  ```

- **Start it**<br>
  ``` javascript
  modelNode.start();
  ```

- **Animate it**<br>
  We would like to see all sides of the model.
  ```javascript
  var tick = function() {
    requestAnimationFrame(tick);
    modelNode.obj3D.rotation.y += 0.02;
  }
  tick();
  ```
  
- **Launch <http://localhost:8000/>{:target="_blank"}**<br>
  You may see a delay at startup since the showcase tries to preload geometry and textures early on.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/tutorial_model_1.png"/><br/>
  <em>Rotating Bunny</em>
</p>
