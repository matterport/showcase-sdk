---
layout: default
title: Making your first component
nav_exclude: true
search_exclude: true
nav_order: 1
---

- [Return to Tutorials](..)
{: .text-epsilon }

Components are the buildings blocks of the Bundle SDK.  In this tutorial, we will build two components that will draw a box around a model when hovering over it.

<div class="mermaid">
graph LR&#10;
  outputs.hovering --> inputs.visible&#10;
  outputs.objectRoot --> inputs.object&#10;
  subgraph mp.gltfLoader&#10;
    outputs.hovering&#10;
    outputs.objectRoot&#10;
  end&#10;
  subgraph box&#10;
    inputs.visible&#10;
    inputs.object&#10;
  end&#10;
</div><br>
