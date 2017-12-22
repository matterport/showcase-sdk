# Events (v1.1, deprecated)

<div class="note">Events docs from SDK v1.1 (deprecated). Refer to <a href="reference/index.html">current reference content</a> and the upgrade path <a href="upgrade.html">from SDK v1.1 to v3.0</a>.</div>



## showcase.Events.ENTER_PANO
The user has moved to a new pano.

```javascript
showcase.on(showcase.Events.ENTER_PANO,
  function (oldPano, newPano) {
    console.log('Just left ', oldPano);
    console.log('Just entered ', newPano);
  }
);
```

Returns | Description
:---: | ---
oldPano | UUID of the pano of the user used to be at
newPano | UUID of the pano of where the user is at now



## showcase.Events.MOVE
User has changed their viewing mode, rotated their viewpoint, or panned the Matterport Space.

```javascript
showcase.on(showcase.Events.MOVE,
  function (state) {
    console.log('Player moved, my new location is ', state.position);
    console.log('Rotation angle at ',  state.rotation);
    console.log('Pano UUID is ', state.uuid);
    console.log('View mode is ', state.mode);
  }
);
```

Returns | Description
:---: | ---
state.position | X, Y, and Z coordinates of the camera (user’s viewpoint) in the Space. [Refer to the absolute position](concept.md) (top-down view).
state.rotation | X, Y, and Z euler angle rotation of the camera (user’s viewpoint). Absolute rotation value (not a delta). `moveToPano` action defaults to 0, 0, 0 values. `moveInDirection` action will retain your current rotation.
state.pano | UUID if inside a pano (Inside View or 360º View)
state.mode | `showcase.Mode.PANORAMA`<br/>`showcase.Mode.DOLLHOUSE`<br/>`showcase.Mode.FLOORPLAN`

### Notes
To prevent overload, this event does not trigger on every frame — only about **once every 100 milliseconds**. The exact timing depends on factors such as processing and rendering time.



## showcase.Events.MODEL_LOADED
The Matterport Space loaded successfully and is ready to explore.

```javascript
showcase.on(showcase.Events.MODEL_LOADED,
  function (metadata) {
    console.log('Space metadata: ', metadata);
  }
);
```

Returns | Description
:---: | ---
metadata | Returns [the metadata](metadata.md) about the Matterport Space

### Notes
Loading can be:
  - *User triggered* — User presses play button to open 3D Showcase.
  - *Automatic* — 3D Showcase automatically loads when webpage loads because of the **&play=1** [URL parameter](https://support.matterport.com/hc/en-us/articles/209980967-URL-Parameters).


[Return to the main page](index.md)
