---
layout: default
title: Release Notes
nav_order: 6
---

### v3.2 
###### Dec 9, 2019
{: .no_toc .text-grey-dk-100 }
- **Transient Mattertags**<br>
Support for creating, updating and deleting mattertags. 
Changes to mattertags disappear once the user leaves showcase. Added `Mattertag.add`, `Mattertag.editColor`, `Mattertag.editBillboard`, `Mattertag.editPosition`, and `Mattertag.remove` See [Guides]({{ site.baseurl }}/docs/guides) section for help on editing transient mattertag content.
- **Synchronous Functions**<br>
We are adding support for synchronous functions. These functions compute and return your data immediately, no promise involved. In general, synchronous functions are more performant since they dont directly interact with the showcase. Use them when you can. To start, we have selected a function that is called frequently `Renderer.getScreenPosition()`. This function is now being deprecated, and the new synchronous function is `Renderer.worldToScreen()`. In order to use synchronous functions, you will need to update your sdk client reference to `https://static.matterport.com/showcase-sdk/2.0.0-0-g7edd6b8/sdk.js`
- Added `Mattertag.getDiscPosition` synchronous function.
- Deprecating `window.SHOWCASE_SDK`, use `window.MP_SDK instead`.
- Update your iframe links. We are no longer using `/showcase-beta` in the iframe link, use `/show` e.g. `https://my.matterport.com/show?m=SxQL3iGyoDo&play=1`. See [Installation]({{ site.baseurl }}/docs/installation/#include-the-library-and-add-a-matterport-space)

### v3.1
###### Aug 22, 2019
{: .no_toc .text-grey-dk-100 }
- Added `Camera.pose` observable property.
- `Camera.getPose()` is now deprecated. It will be removed in a future update.
- Added Pointer namespace and `Pointer.intersection` observable property
- Recommended SDK Client version updated to: `https://static.matterport.com/showcase-sdk/1.2.0-31-g16b6637/sdk.js`

### v3.0.12.25
###### May 3, 2019
{: .no_toc .text-grey-dk-100 }
- Added colors and anchor points `Mattertag.MattertagData`

### v3.0.12.18
###### April 25, 2019
{: .no_toc .text-grey-dk-100 }
- Added `Measurements.getData()`. You can now access measurements created from Workshop!
- Added `App.getLoadTimes()`. You can now access app phase timing information!
- Added transition type parameter to `Mattertag.navigateToTag()`
- Removed `Mattertag.ActiveMattertagData` type
- Removed `Mattertag.Event.UPDATE`
- Added projection property to `Camera.getPose()`
- Added optional includeHiddenFloors parameter to `Renderer.getWorldPositionData()`
- Added `Renderer.takeEquirectangular()`

### v3.0.3.35
###### June 27, 2018
{: .no_toc .text-grey-dk-100 }
- New actions on camera, new namespaces for Renderer, and Settings
- Recommended SDK Client version updated to: `https://static.matterport.com/showcase-sdk/1.2.0-0-g1d0799d/sdk.js`
- [See a list of modified endpoints.]({{ site.baseurl }}/docs/upgrade/#upgrading-from-v30-to-v30335)

### v3.0.0.196
###### February 12, 2018
{: .no_toc .text-grey-dk-100 }
- Renamed `toggle()` to `setActive()`
- Renamed `MattertagPositionData` to `ActiveMattertagData`
- Removed `HoverState` event, redundant with `Event.HOVER`
- Removed `SelectedState` event, use `Event.CLICK` instead`
- Renamed `getMattertagData` to `getData`
- Removed `BoardState` enum.
- Added `MattertagData.isActive` property
- Added `TagDescriptionChunkType` enum
- Added `TagMediaType` enum
- Added `LinkType` enum
- Removed `MattertagData.floorIndex` property
- Removed `MattertagData.mode` property
- Removed `MattertagData.color` property
- Removed `MattertagData.anchorPosition` property
- Removed `MattertagData.stemVector` property
- Renamed `SweepInfo.newPano` to `SweepInfo.newSweep`
- Renamed `SweepInfo.oldPano` to `SweepInfo.oldSweep`
- Removed `ModelData.panos` property
- Removed `SweepData.modelSupportsVr` property
- Removed `SweepData.neighbourUUIDs` property
- Removed `SweepData.thumbnail` property
- Renamed `getModelData()` to `getData()`
- Renamed `getModelDetails()`` to `getDetails()`
- Renamed `ModelDetails.contact_email` to `ModelDetails.contactEmail`
- Renamed `ModelDetails.contact_name` to `ModelDetails.contactName`
- Renamed `ModelDetails.formatted_address` to `ModelDetails.formattedAddress`
- Renamed `ModelDetails.formatted_contact_phone` to `ModelDetails.formattedContactPhone`
- Renamed `Pose.pano` to `Pose.sweep`
- Removed `rotateInDirection()` function
- Removed `Event.CHANGE` event
- Renamed `Event.PLAYING` to `Event.PHASE_CHANGE`

### v3.0
###### December 4, 2017
{: .no_toc .text-grey-dk-100 }
- New actions and events on floors, labels, and Mattertag™ Posts.
- New set of reference content that covers all actions and events. 
- Version 1.x no longer supported. Version 2.0 skipped.
- [See a list of modified endpoints.]({{ site.baseurl }}/docs/upgrade/#upgrading-from-v11-to-v30)

### v1.1
###### August 10, 2017
{: .no_toc .text-grey-dk-100 }
- Added `getPose` and `takeScreenShot` actions.
- Added pano thumbnails from the default pose into the metadata.

### v1.0
###### February 16, 2017
{: .no_toc .text-grey-dk-100 }
- Initial release of SDK. Focus on movement and the user’s location in the space.