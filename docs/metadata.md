# Metadata

After [connecting to the Matterport Space](implementation.md) and the `showcase.Events.MODEL_LOADED` event has triggered, you have access to `showcase.metadata` that contains information about the entire Matterport Space.

Metadata contains static information about the entire Matterport Space. It is not dynamic information based on your current position.

## showcase.metadata

`showcase.metadata` is an object with several properties.

One such property is `pano`, which is a list of panos. Each `pano` contains the following properties:

Property | Type | Description
:---: | :---: | ---
uuid | String | The UUID of the pano.
position | Object | Contains X, Y, and Z properties (floating point numbers) that represent the Matterport camera’s position within the Space. This only appears for aligned panos. For 360º Views (unaligned panos), this is `null`.
neighbourUUIDs | List of strings | The UUIDs of the neighboring panos. Neighboring panos are those within a line-of-sight from the current pano.
aligned | Boolean |`true` if the pano is aligned with other panos. From the Capture app, this is a 3D Scan. `false` if the pano is not aligned. From the Capture app, this is a 360º View.
rotation | Object | The default orientation for the pano. This is the same orientation the Matterport camera was in when the operator started capturing. If you pass this into the `rotate` action, you will get the same view as in the thumbnail.
thumbnail | String | A URL to the screenshot of the pano in the default `rotation` listed above. This is the same as the first shot the camera takes during the capture process.


[Return to the main page](index.md)
