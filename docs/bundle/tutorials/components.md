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

- **
  <div class="mermaid">
  graph LR&#10;
    subgraph Initializing&#10;  
      id1(addComponent) --> id2[setupBindings]&#10;
      id2 --> id3&#10;
      id3(start) --> id4[onInit]&#10;
      style id1 fill-opacity:0.1,stroke-width:0px&#10;
      style id3 fill-opacity:0.1,stroke-width:0px&#10;
      style id2 stroke-dasharray: 5, 5&#10;
      style id4 fill:#CEFFD7&#10;
      linkStyle 1 stroke-width:0px&#10;
    end&#10;
</div><br>
