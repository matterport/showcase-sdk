---
layout: default
title: Overview
nav_exclude: true
search_exclude: true
nav_order: 1
---

- [Return to SDK Bundle Home](../main)
{: .text-epsilon }

# Overview
{: .no_toc }

- TOC
{:toc}

# Scene Nodes
---
Scene nodes contain and manage the lifecycle of their child components. Scene nodes have a 3D transform that parent child components.

Scene node have the following states:
- <b>Initializing</b> - The scene node is not part of the scene graph during this state. Components can be added and property bindings can be created.
- <b>Operating</b> - The scene node becomes active and is part of the scene graph. Child components are also operating.
- <b>Destroyed</b> - The scene node and its components are removed from the scene graph and destroyed.

<div class="mermaid">
graph LR&#10;
  id1[createNode] --> Initializing&#10;
  Initializing --> |start| Operating&#10;
  Operating --> |stop| Destroyed&#10;
  style id1 fill-opacity:0.1,stroke-width:0px&#10;
</div><br>

The following is an example of scene node usage.
```javascript
// Creating a scene node
const node = await sdk.Scene.createNode();

// Adding a component
node.addComponent('mp.fbx', {
  url: 'https://www.google.com'
});

// Starting a scene node
node.start();

// Destroying a scene node
node.stop();
```

# Components
---
Components are associated to a single scene node. They are used to build appearance, behavior, and interactions in 3D.
Components adhere to a standard interface making them reusable and shareable across multiple applications.

## Component Lifecycle
Components have five callbacks,

- <b>onInit</b> - This function is called when the scene node is started. Peer components are called in the order they were added to the scene node.

- <b>onInteraction</b> - This function is called once for each interaction that occured during the last frame.

- <b>onInputsChanged</b> - This function is called prior to `onTick` but after `onInteraction`. It is called once if any `inputs` property has changed during the last frame.
  
- <b>onTick</b> - This function is called every frame.

- <b>onDestroyed</b> - This function is called when the scene node is stopped. Component `onDestroy` callbacks are called in the reverse order they are added to the scene node.
<br/><br/>

Legend:

Component Callbacks
{: .label .label-legend-callback}

Component Bindings Allowed
{: .label .label-legend-info}

Scene Node Function Calls
{: .label .label-legend-scene-node-calls}

<br/>

During the `Initializing` state, components can be added and property bindings can be created. Calling `start` triggers `onInit` to be called on each component prior to entering the `Operating` state.
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

During the `Operating` state, interactions, input changes and ticks are handled by each component.
<div class="mermaid">
graph LR&#10;
  subgraph Operating&#10;
    id1[onInteraction] --> id2[onInputsChanged]&#10;
    id2 --> id3[onTick]&#10;
    style id1 fill:#CEFFD7&#10;
    style id2 fill:#CEFFD7&#10;
    style id3 fill:#CEFFD7&#10;
  end&#10;
</div><br>

Upon entering the `Destroyed` state, components should free allocated resources.
<div class="mermaid">
graph LR&#10;
  subgraph Destroyed&#10;
    id1[stop] --> id2[onDestroyed]&#10;
    style id1 fill-opacity:0.1,stroke-width:0px&#10;
    style id2 fill:#CEFFD7&#10;
  end&#10;
</div>

## Input and Output Dictionaries
Components have properties named `inputs` and `outputs`. The properties are dictionaries defined by the component. The `inputs` dictionary represents properties that affect the components behavior or appearance. The `outputs` dictionary represents properties computed by the component.

An example of a computed output,
```javascript
function Sum() {
  this.inputs = {
    augend: 0,
    addend: 0,
  };

  this.outputs = {
    sum: 0;
  };

  // if any input changes, recompute the sum.
  this.onInputsUpdated = function() {
    this.outputs.sum = this.inputs.augend + this.inputs.addend;
  };
}
```

## Property Bindings
A property binding is a connection from a components `inputs` property to another components `outputs` property. The `inputs` property is called the **Binding Target** and the `outputs` property is called the **Binding Source**.  Changes to the **Binding Source** value will propagate to the **Binding Target**.  **Binding Target**s should be treated as `read-only`.

```javascript
// assume Sum() class from Inputs and Outputs Dictionaries section
var node = await sdk.Scene.createNode();
var comp1 = node.addComponent('sum');
var comp2 = node.addComponent('sum');
var comp3 = node.addComponent('sum');

// bind comp1.inputs.augend to comp2.outputs.sum
// bind comp1.inputs.addend to comp3.outputs.sum
comp1.bind('augend', comp2.outputs, 'sum');
comp1.bind('addend', comp3.outputs, 'sum');

node.start();

comp2.inputs.augend = 5;
console.log(comp1.outputs.sum);
// output: 5

comp3.inputs.addend = 6;
console.log(comp1.outputs.sum);
// output: 11

```
<div class="mermaid">
graph LR&#10;
  a13 --> a00["11"]&#10;
  a01["5"] --> a21&#10;
  a04["6"] --> a32&#10;
  subgraph comp1&#10;
    a11[augend] --> a13[sum]&#10;
    a12[addend] --> a13[sum]&#10;
    linkStyle 3 stroke-width:0px&#10;
    linkStyle 4 stroke-width:0px&#10;
  end&#10;
  subgraph comp2&#10;
    a21[augend] --> a23[sum]&#10;
    a22[addend] --> a23[sum]&#10;
    a23[sum] --> |5| a11&#10;
    linkStyle 5 stroke-width:0px&#10;
    linkStyle 6 stroke-width:0px&#10;
  end&#10;
  subgraph comp3&#10;
    a31[augend] --> a33[sum]&#10;
    a32[addend] --> a33[sum]&#10;
    a33[sum] --> |6| a12&#10;
    linkStyle 8 stroke-width:0px&#10;
    linkStyle 9 stroke-width:0px&#10;
  end&#10;
</div>