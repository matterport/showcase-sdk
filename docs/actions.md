# Actions

<div class="admonition note">The 3D Showcase SDK is actively in development. Details are subject to change. Email <a href="mailto:developers@matterport.com">developers@matterport.com</a> with any questions.</div>



## moveToPano
Change the viewing mode in 3D Showcase.

```javascript
showcase.moveToMode({
  mode: <mode>
})
   // callback that receives success message
.then(successCallback)
  // callback that receives the error message
.catch(errorCallback);
```

Argument | Type | Required? | Value
:---: | :---: | :---: | ---
mode | Enum | Required | `showcase.Mode.PANORAMA`<br>`showcase.Mode.DOLLHOUSE`<br>`showcase.Mode.FLOORPLAN`

### Errors
Warns if value is not one of the above options. Warns if the embed cannot download assets from the Matterport Space to switch to the new mode (because of network issues).

### Notes
The user’s viewpoint is chosen in the same way 3D Showcase normally chooses when switching between modes. If you are in a 360º View and you want to move to another pano, use moveToPano.



## moveToPano
Move to a new panorama (a new scan position in Inside View or a new 360º View).

```javascript
showcase.moveToPano({
  pano: <uuid>,
  rotation: <rotationObject>,
  transition: <transition>
})
   // callback that receives success message
.then(successCallback)
  // callback that receives the error message
.catch(errorCallback);
```

Argument | Type | Required? | Value
:---: | :---: | :---: | ---
uuid | String | Required | UUID of new pano to move to. Use the result from `showcase.Events.ENTER_PANO `or `showcase.Events.MOVE` to find a specific UUID.
rotation | Object | Optional | The x and y Euler angles (float values) to rotate the viewpoint upon arrival to the new pano. Euler angles can be counter-intuitive. See rotate action. [Learn more about Euler angles](https://en.wikipedia.org/wiki/Euler_angles). `var rotationObject = { x: 20, y: 30 }` Default is no rotation upon arrival:  {x: 0, y: 0}
transition | String | Optional | `showcase.Transition.FLY` (default)<br/>`showcase.Transition.FADEOUT`<br/>`showcase.Transition.INSTANT`<br/>

### Errors
Fails if the provided UUID does not exist in the list of panos. Fails if the rotation or transition is specified incorrectly. This parameter is then ignored.



## rotate
Rotates the camera (user’s viewpoint).

```javascript
showcase.rotate(10, -20)
   // callback that receives success message
.then(successCallback)
  // callback that receives the error message
.catch(errorCallback);
```

Argument | Type | Required? | Value
:---: | :---: | :---: | ---
vertical | Float | Required | How many degrees to rotate up or down.
horizontal | Float | Required | How many degrees to rotate left or right.

### Errors
Warns to console if you rotated, but then you hit the vertical limit. Fails if no movement because you are already at a rotation limit. Warns if trying to rotate up or down in Floorplan View.  

### Notes
If user is in Floorplan View, the entire Matterport Space is rotated.
  - Positive values for `horizontal` means the Space rotates **counterclockwise**.
  - Negative values for `horizontal` **clockwise** rotations.
  - The `vertical` value is ignored.

If user is in Dollhouse View, the entire Matterport Space is rotated.
  - Positive values for `horizontal` means the Space rotates **counterclockwise**.
  - Negative values for `horizontal` are **clockwise** rotations.
  - `vertical` ranges from 0 (ground level) to 80 (almost top-down).

If the user is in Inside View or 360º View, their viewpoint is rotated.
  - Positive values for `horizontal` means the user rotates **counterclockwise**.
  - Negative values for `horizontal` are **clockwise** rotations.
  - `vertical` ranges from -40 (down) to 40 (up).
  - Tilting the view (similar to tilting one’s head) not supported.

Rotation is relative to the user’s current viewpoint. This is the same behavior as if the user uses the [keyboard shortcuts](https://support.matterport.com/hc/en-us/articles/216809738-3D-Showcase-Workshop-Keyboard-Shortcuts) I, J, K, and L.



## rotateDirection
Rotate the user’s viewpoint (the camera) in a certain direction.

```javascript
showcase.rotateDirection(direction, angle)
   // callback that receives success message
.then(successCallback)
  // callback that receives the error message
.catch(errorCallback);
```

Argument | Type | Required? | Value
:---: | :---: | :---: | ---
direction | Enum | Required | Which direction to rotate to: <br/>`showcase.Direction.LEFT`<br/>`showcase.Direction.RIGHT`<br/>`showcase.Direction.UP`<br/>`showcase.Direction.DOWN`
angle | Float | Required | How much to rotate

### Errors
Warns to console if you rotated, but you hit the vertical limit. Fails if there is no movement because you are already at a rotation limit. Warns if trying to rotate up or down in Floorplan View.  

### Notes
Similar to `rotate` action, but `rotateDirection` is specified in a more intuitive, easy-to-understand manner. Rotation is relative to the user’s current viewpoint. This is the same behavior as if the user uses the [keyboard shortcuts](https://support.matterport.com/hc/en-us/articles/216809738-3D-Showcase-Workshop-Keyboard-Shortcuts) I, J, K, and L.



## panCamera
Moves the camera (user’s viewpoint) for Dollhouse or Floorplan.

```javascript
showcase.panCamera({
  x: <meters>,
  z: <meters>
}).then(successCallback)
   // callback that receives success message
.catch(errorCallback);
  // callback that receives the error message;
```

Argument | Type | Required? | Value/Description
:---: | :---: | :---: | ---
x | Float | Required | Absolute position of the pano on the x axis.
z | Float | Required | Absolute position of the pano on the z axis.

### Errors
Warns if pan was successful but you hit the model bounds. Fails if you are already at the model bounds and you cannot move any further.

### Notes
The orientation of the axes depends on the pano you were in before entering Floorplan and the aspect ratio of window.

Only available in Dollhouse or Floorplan View. This is the same behavior as if the user uses the [keyboard shortcuts](https://support.matterport.com/hc/en-us/articles/216809738-3D-Showcase-Workshop-Keyboard-Shortcuts) I, J, K, and L or the arrow keys.

Use `showcase.panCamera({ x: 0, z: 0 });` to return to directly above the very first pano scanned.



## moveInDirection
Moves user to a different pano relative to their current location

```javascript
showcase.moveInDirection(<direction>)
   // callback that receives success message
.then(successCallback)
  // callback that receives the error message
.catch(errorCallback);
```

Argument | Type | Required? | Value/Description
:---: | :---: | :---: | ---
direction | Enum | Required | `showcase.Direction.LEFT`<br/>`showcase.Direction.RIGHT`<br/>`showcase.Direction.FORWARD`<br/>`showcase.Direction.BACK`<br/>`showcase.Direction.UP`<br/>`showcase.Direction.DOWN`

### Errors
Fails if direction is not one of the above options. Warns if you can’t move in that direction (hit a wall).

### Notes
This is the same behavior as if the user presses the arrow keys while in 3D Showcase.

  - `showcase.Direction.UP`  is like moving forwards
  - `showcase.Direction.DOWN`  is like moving backwards

This action is meant for Inside View, but can also be used in Dollhouse and Floorplan Views. In the latter two modes, `showcase.Direction.UP` will move the user into a pano (either the previous pano or the closest pano to the user’s view).



## getPose
Returns the current state of 3D Showcase. Does not change the state.

```javascript
showcase.getPose().then(function (pose) {
  console.log('Current position is ', pose.position);
  console.log('Rotation angle is ', pose.rotation);
  console.log('Pano UUID is ', pose.uuid);
  console.log('View mode is ', pose.mode);
});
```

Returns | Description
:---: |  ---
state.position | X, Y, and Z coordinates of the camera (user’s viewpoint) in the Space. [Refer to the absolute position](concepts.md) (top-down view).
state.rotation | X, Y, and Z euler angle rotation of the camera (user’s viewpoint). Absolute rotation value (not a delta). `moveToPano` action defaults to 0, 0, 0 values. `moveInDirection` action will retain your current rotation.
state.pano | UUID if inside a pano (Inside View or 360º View).
state.mode | `showcase.Mode.PANORAMA`<br/>`showcase.Mode.DOLLHOUSE`<br/>`showcase.Mode.FLOORPLAN`



## takeScreenShot
Takes a screenshot (JPEG) of the user’s current view.

```javascript
showcase.takeScreenShot(<resolution>)
.then(function (screenShotUrl) {
  // set src of an img element
  img.src = screenShotUrl
});
```

Argument | Type | Required? | Value/Description
:---: | :---: | :---: | ---
resolution | Object | Optional | The desired resolution for the screenshot. For example: `{width: 1920, height: 1080}` <br/><br/> If no resolution is specified, then the resolution of the size of Showcase (the current window or the `<iframe>` embed) is used. Maximum 4096 x 4096.
visibility | Object | Optional | Toggles certain scene objects such as Mattertag Posts and pano markers. For example: `{ showPucks:true, showMattertags: true }` <br/><br/> If no visibility object is specified, then all scene objects are hidden.

### Errors
Warns if the resolution is 0 or negative.

### Notes
The URL only exists (temporarily) on the client’s browser. It is not on Matterport servers and does not persist between user sessions.


[Return to the main page](index.md)
