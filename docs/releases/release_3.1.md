---
layout: default
title: 3.1
parent: Releases
nav_order: 2
---

## SDK 3.1 Additions (08-20-2019)
We are introducing observables to the SDK, email us at developer@matterport.com with your feedback.. 
The additions that follow will likely change over the next couple of weeks depending on feedback.

We will be adding two observable properties, `Camera.pose` and `Pointer.intersection`.

#### Observables
* Each observable property will have a `subscribe` function that will initiate observable callbacks.
* The `subscribe` function returns a subscription. The subscription is used to stop observable callbacks.
* Observable callbacks are triggered when a state change is detected.
* If the data is available, any new subscribe callbacks will be triggered immediately. Otherwise, you will be called back when the data becomes available.

#### Added `Camera.pose` observable property
This observable calls you back whenever the camera pose changes. The type of the pose property is the same as the one returned from `Camera.getPose()`

Reference: [Camera.Pose](https://matterport.github.io/showcase-sdk/docs/reference/modules/camera.html#pose)

Usage:
```javascript
var sub = mpSdk.Camera.pose.subscribe(function(pose){
    console.log("positions:  ", pose.position);
    console.log("rotation: ", pose.rotation);
});


// When you no longer need the callback, unsubscribe from the observable.
sub.cancel();
```

#### Added `Pointer.intersection` observable property
The `Pointer` namespace is new and refers to properties and functions referring to the users pointing device, e.g. mouse, touchpad, or stylus. The intersection observable provides you with details of the 3D surface that is under the pointer.
This observable calls you back when the intersection under the pointer changes.

Usage:
```javascript
var sub = mpSdk.Pointer.intersection.subscribe(function(intersection){
    console.log("normal:  ", intersection.normal);
    console.log("object: ", intersection.object);
    console.log("position: ", intersection.position);
});


// When you no longer need the callback, unsubscribe from the observable.
sub.cancel();
```

`intersection.object` is one of the following values:

| Value                           | Description                       |
|---------------------------------|-----------------------------------|
| mpSdk.Pointer.Colliders.NONE    | No intersectable geometry.        |
| mpSdk.Pointer.Colliders.MODEL   | Intersects the model.             |
| mpSdk.Pointer.Colliders.SWEEP   | Intersects a sweep puck.          |
| mpSdk.Pointer.Colliders.TAG     | Intersects a mattertag.           |
| mpSdk.Pointer.Colliders.UNKNOWN | Intersects unclassified geometry. |


#### Accessing the new functionality


1. Changes were made to the sdk client file to support observables. You will need to update your reference to that file as follows,
`<script src="https://static.matterport.com/showcase-sdk/1.2.0-31-g16b6637/sdk.js"></script>`
2. You will need to request an updated interface version when connecting to the showcase iframe.
Use `3.1` as follows,
```javascript
window.MP_SDK.connect(showcaseIframe,
  'YOUR APPLICATION KEY', '3.1').then(function(sdk) {
});
```


See the observables in action, [Showcase JsFiddle](https://jsfiddle.net/guillermo_matterport/co87amLq)

Open the javascript console to see the output.

