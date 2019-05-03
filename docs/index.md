
# Introduction

The Matterport 3D Showcase SDK is a Javascript library for third-party developers to integrate Matterport with their web application. Developers can deeply customize the 3D Showcase experience and build entire applications off of Matterport, enabling many exciting new use cases.

With the SDK, developers can:

- **Execute actions** to control 3D Showcase from their web app. For example, the user clicks a button on a webpage and moves to a specific location in the Matterport Space.
- **Listen to events** from 3D Showcase and respond in their web app. For example, play a sound or voiceover when the user goes to a certain location in the Matterport Space.

The SDK does not have all the same actions and events that an end-user can do in 3D Showcase. We are building out the SDK based on demand.


# Releases

 Version | Date | Notes
:-------:|:--------:|-----
3.0.12.25 | May 3rd, 2019 | Added color and anchor points to Mattertags data object
3.0.12.18 | April 25th, 2019 | You can now access measurements data and app phase timing information! Small modifications to endpoints in Mattertag and Renderer. [See release notes](release-notes.html)
3.0.3.35 | June 27th, 2018 | New actions on camera, new namespaces for Renderer, and Settings, Recommended SDK Client version updated to: `https://static.matterport.com/showcase-sdk/1.2.0-0-g1d0799d/sdk.js` [See a list of modified endpoints](upgrade.html)
3.0 | December 4th, 2017 | New actions and events on floors, labels, and Mattertag™ Posts. New set of reference content that covers all actions and events. Version 2.0 skipped. [See a list of modified endpoints](upgrade.html).
1.1 | August 10th, 2017 | **Version 1.x no longer supported**. Added `getPose` and `takeScreenShot` actions. <br/>Added pano thumbnails from the default pose into the metadata.
1.0 | February 16th, 2017 | Initial release of SDK. Focus on movement and the user's location in the space.
