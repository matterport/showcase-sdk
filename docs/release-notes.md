# Release Notes

## May 3rd, 2019

### Mattertag

- Added colors and anchor points `Mattertag.MattertagData`

## April 25th, 2019

### Measurements

- Added `Measurements.getData()`. You can now access measurements created from Workshop!

### App

- Added `App.getLoadTimes()`. You can now access app phase timing information!

### Mattertag

- Added transition type parameter to `Mattertag.navigateToTag()`
- Removed `Mattertag.ActiveMattertagData` type
- Removed `Mattertag.Event.UPDATE`

### Camera

- Added projection property to `Camera.getPose()`

### Renderer

- Added optional includeHiddenFloors parameter to `Renderer.getWorldPositionData()`
- Added `Renderer.takeEquirectangular()`



## February 12th, 2018

### Mattertag

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

### Sweep

- Renamed `SweepInfo.newPano` to `SweepInfo.newSweep`
- Renamed `SweepInfo.oldPano` to `SweepInfo.oldSweep`

### Model

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

### Camera

- Renamed `Pose.pano` to `Pose.sweep`
- Removed `rotateInDirection()` function

### App

- Removed `Event.CHANGE` event
- Renamed `Event.PLAYING` to `Event.PHASE_CHANGE`
