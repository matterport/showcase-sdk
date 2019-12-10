---
layout: default
title: Vocabulary
nav_order: 2
---

# Vocabulary

 Term | Definition
:----:| ----------
SDK Client | An object that sits on the window object of the page containing the showcase embed, `window.MP_SDK` . This object is used to make a connection to the sdk.<br>The client is loaded and initialized by executing the sdk client script, `https://static.matterport.com/showcase-sdk/2.0.0-0-g7edd6b8/sdk.js`<br>In the example link above, the sdk client version is 2.0.0<br>See [Installation]({{ site.baseUrl }}docs/installation/#include-the-library-and-add-a-matterport-space) for instructions on how to load the sdk client.
Pano or Sweep | Short for panorama. A spot in the Matterport Space where a user can stand and look around. Also called a 'sweep' as in a full Matterport camera rotation.<br/><br/>This includes 3D scan locations (panos aligned to each other) and 360º Views (unaligned panos).<br/><br/>A pano is the 2D visual data. This is different from 3D mesh data that the user sees in Dollhouse and Floorplan View.
UUID | Unique Universal ID. This is used to identify a single pano among the many panos in a Matterport Space.
Position | Absolute position (X, Y, and Z coordinates) of the pano within the Matterport Space. [Learn more](../concepts) about the coordinate conventions.
Transition | Transitions are what the user sees when they move from one pano to another. Transitions can be: <br/>1) **Fly-through** — Flies from pano to pano inside the 3D Space. <br/>2) **Fade** — Fades to black in between panos. This gives a more “slideshow” type of feeling. <br/>3) **Instant** — Immediately switches from one pano to another without any transition.
Mode | The user’s current view in 3D Showcase. It can be one of five possible modes:<br/><br/>1) Inside View (aligned pano)<br/> 2) 360º View or Outside View (unaligned pano)<br/> 3) Dollhouse View<br/> 4) Floorplan View<br/> 5) Transitioning between different modes.
