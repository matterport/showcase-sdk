---
layout: default
title: Reference
nav_order: 8
has_toc: false
---

# Reference

## Embed SDK
*   [3.2 (current)](current)
*   [3.1](3.1)

## Explore the Reference Docs

We've organized our [SDK reference docs]({{ site.baseurl }}/docs/reference/current/index.html) around modules (features) within 3D Showcase. If you're new to the SDK docs, here's a short description of each module.

Name | Description
:---: | ---
[Globals]({{ site.baseurl }}/docs/reference/current/index.html) | Things related to the entire SDK, including subscribing (listening) and unsubscribing to events.
[Camera]({{ site.baseurl }}/docs/reference/current/modules/camera.html) | The end-user's view and what they currently see.
[Floor]({{ site.baseurl }}/docs/reference/current/modules/floor.html) | How many floors in space and moving between floors.
[Mattertag]({{ site.baseurl }}/docs/reference/current/modules/mattertag.html) | Get and read content from Mattertag™ Posts.
[Mode]({{ site.baseurl }}/docs/reference/current/modules/mode.html) | Related to the end-user's current viewing mode (Dollhouse, Floorplan, Inside View, etc)
[Model]({{ site.baseurl }}/docs/reference/current/modules/model.html) | Related to the metadata of the Matterport Space as a whole
[Sweep]({{ site.baseurl }}/docs/reference/current/modules/sweep.html) | Moving to a specific sweep/pano within the entire space
[Tour]({{ site.baseurl }}/docs/reference/current/modules/tour.html) | Related to the Highlight Reel and Guided Tour functionality

Within each module, the reference docs are organized in this way:
- **Enumerations** - Typically these are events that you can listen to. Enums also include values of specific parameters for your actions.
- **Types** - Definitions of objects and the primitives that they contain. These objects are used in the actions below.
- **Functions** - Actions you can execute. Actions typically show the user something new or otherwise change the state of 3D Showcase.
