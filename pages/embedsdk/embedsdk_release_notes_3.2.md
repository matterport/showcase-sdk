---
title: Release Notes 3.2
tags: [formatting]
keywords: popovers, tooltips, user interface text, glossaries, definitions
last_updated: July 3, 2016
sidebar: embedsdk_sidebar
permalink: embedsdk_release_notes_3.2.html
folder: embedsdk
---

## SDK 3.2 Additions (11-22-2019)

## New Features
- Transient Matterags
-- Create mattertags using the sdk.
- Synchronous Functions
-- PLACEHOLDER

### Transient mattertags
Transient mattertags are mattertags created through the SDK. These mattertags behave just like regular mattertags with one exception, they are temporary. They will need to be recreated during each user session.

### Adding a transient mattertag
The [Reference: Mattertag.add](reference/modules/mattertag.html#add) function takes a single or an array of [MattertagInput](reference/interfaces/mattertag.mattertaginput) objects. The following properties are supported by [MattertagInput](reference/interfaces/mattertag.mattertaginput):

| Property | Required | Description |
|---------------------------------|-----------------------------------|
| anchorPosition | yes | The mattertag anchor, It is typically attached to a surface on the matterport model. |
| stemVector | yes | The mattertag stem. It's length determines how far it will be offset from the anchor position. |
| color   | no | The color of the disc. |
| description | no | The mattertag description. Links can be included in the description. |
| label | no | The mattertag label. |
| mediaType | no | The mediaSrc type. This can be photo, video, or rich media. This property must be set to display the media source. |
| mediaSrc | no | A url to the media. The urls must be supported by embed.ly|

<p align="center">
  <img src="images/mattertag-properties.png" border="1">
  <em>Mattertag Properties</em>
</p>

Adding a mattertag with a label and no stem
```javascript
var mattertagDesc = {
  label: 'Hello Mattertag',
  anchorPosition: { x: 1.39, y: 2.00, z: -0.122 },
  stemVector: { x: 0, y: 0, z: 0 }
};

sdk.Mattertag.add(mattertagDesc).then(function(mattertagId) {
  console.log(mattertagId);
  // output: TODO
});
```

Adding multiple mattertags at once
```javascript
var mattertags = [{
  label: 'Tag 1',
  anchorPosition: { x: 0, y: 0, z: 0},
  stemVector: { x: 0, y: 0, z: 0}
},{
  label: 'Tag 2',
  description: '<3 this tag!',
  anchorPosition: { x: 1, y: 0, z: 0 },
  stemVector: { x: 0, y: 0.5, z: 0}
}];

sdk.Mattertag.add(mattertags).then(function(mattertagIds) {
  console.log(mattertagIds);
  // output: TODO
});
```

### Updating a mattertag
You can edit the title, description, and media for both transient and regular mattertags by calling
[Reference: Mattertag.edit](reference/modules/mattertag.html#edit)


### Finding an anchor position and stem direction for a mattertag

### Adding a link to the mattertag description

### Adding media to a mattertag.

### Synchronous functions