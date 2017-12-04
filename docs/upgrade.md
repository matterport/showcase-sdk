
# Upgrading from v1.1 to v3.0

In version 3.0 of the SDK, we refactored our code into modules that are easier for us to maintain. As a result, some of the endpoints have changed from version 1.1. We've listed what's changed below.

## Actions

Version 1.1 | Version 3.0
-------|--------
moveToMode() | Move.MoveTo()
moveToPano() | Sweep.moveTo()
rotate() | Camera.rotate()
rotateDirection() | Camera.rotateInDirection()
panCamera() | Camera.pan()
moveInDirection() | Camera.moveInDirection()
getPose() | Camera.getPose()
takeScreenshot() | Camera.takeScreenshot()

## Events

Version 1.1 | Version 3.0
-------|--------
Event.ENTER_PANO | Sweep.Event.ENTER
Event.MOVE | **Deprecated**
Event.MODEL_LOADED | Model.Event.MODEL_LOADED

<div class="note">We've skipped SDK version 2.0 so the SDK version number and the end-user (web player) version number are the same.</div><br/>
### [Return to the main page](index.md)
