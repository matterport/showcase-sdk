# Concepts

The Matterport 3D Showcase SDK is currently focused on functionality about the **user’s location within the Matterport Space** and also what the user sees **(taking screenshots)**.

Your website (web application or web app) can **execute actions** to change where the user is. [Learn more](actions.md) about all the actions you can execute on 3D Showcase.

Your web app can also **listen to events** about where the user is. Users navigate through 3D Showcase like normal, and your web app listens and reacts appropriately. [Learn more](events.md) about events.

Your web app can **BOTH** execute actions and listen to events. Typically though, you will do one or the other depending the purpose of your web app.

Finally, you can also use metadata about the entire Matterport Space. [Learn more](metadata.md).

<p align="center">
  <img src="images/message-flow.png"/><br/>
  <em>Simple Message Flow with the 3D Showcase SDK</em>
</p>

If you’re having problems running 3D Showcase, it may be a problem with WebGL. Review our [system requirements](https://support.matterport.com/hc/articles/208220058) for 3D Showcase.


## Coordinate Conventions

X, Y, and Z coordinates are from the **viewpoint of the Matterport camera** when it scanned the environment.

To make it easier to visualize, pretend the Matterport camera is a “human” and the Matterport camera lenses are his or her “eyes.” The buttons on the back of the Matterport Camera back are like the back of a person’s head.

Then, coordinate conventions are easier to describe relative to how a person moves:

<p align="center">
  <img src="images/xyz-coordinate-system.png"/><br/>
</p>

This diagram is shown relative to the camera’s current position.

Another way to visualize the coordinate system is from the Floorplan View. This is the same as a “birds-eye” top-down view.

<p align="center">
  <img src="images/top-down-coordinate-system.png"/><br/>
</p>

The floorplan is an absolute position of the Matterport Camera within the Space when it scanned.

The orientation of the Floorplan View depends on the original orientation of the pano that you transitioned from and the aspect ratio of the window.

The coordinate system is centered around the **first pano that was scanned**. This may be different from your Start Position.

To find the first scan, find the Space in [my.matterport.com](https://my.matterport.com) and then launch Workshop.

<p align="center">
  <img src="images/first-scan-in-matterport-workshop.png"/><br/>
</p>

Open the **3D Scans & 360º Views** menu. **Double click on Scan 1** and you will be transported to that scan position.


[Return to the main page](index.md)
