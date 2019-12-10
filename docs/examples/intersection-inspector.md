---
layout: default
title: Intersection Inspector
nav_order: 1
parent: Examples
---
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Intersection Inspector
You can use this tool to inspect the surfaces of a model. It is a jsfiddle application located here,
[http://jsfiddle.net/guillermo_matterport/pftnhkuc](http://jsfiddle.net/guillermo_matterport/pftnhkuc)

## Setting up a model in the intersection inspector
- Go to this jsfiddle editor link [Editor](http://jsfiddle.net/guillermo_matterport/pftnhkuc/?utm_source=website&utm_medium=embed&utm_campaign=pftnhkuc) You can also select `Edit in JSFiddle` at the bottom of this page.
- Select `Fork` to create your own copy of the application.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/intersection-inspector-fork.png"/><br/>
</p>
- Set your model sid. Look for the modelSid variable.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/intersection-inspector-setmodel.png"/><br/>
</p>
- Run your updated application. You should see your model loaded in the Results pane.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/intersection-inspector-run.png"/><br/>
</p>

## Using the intersection inspector
- Load the application after you have setup your model.
- Navigate to the location on the model that you would like to inspect.
- Place the mouse over the area of interest and stop moving it. You should see a button pop up right over the mouse. If you move the mouse outside the area of the button, it will disappear.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/intersection-inspector-button.png"/><br/>
</p>
- Click the button and look at the upper left of the showcase window. You will see the 3D position and normal for the point you clicked.
<p align="center">
  <img src="{{ site.baseurl }}/assets/images/intersection-inspector-values.png"/><br/>
</p>
- Copy the position and normal text. You can use the position value to set the mattertag anchor position and normal value to set the stem.

## Examine the code
<iframe width="100%" height="400px" src="//jsfiddle.net/guillermo_matterport/pftnhkuc/embedded/" allowfullscreen="allowfullscreen" frameborder="0" style="overflow: hidden; border-radius: 3px;"></iframe>
