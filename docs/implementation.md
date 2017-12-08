# Installation


<div class="note">Usage of the SDK constitutes your agreement with the <a href="https://matterport.com/legal/terms-of-service/">Matterport Third Party Developer Policy</a>. Email <a href="mailto:developers@matterport.com">developers@matterport.com</a> with any questions.</div>

## Include the Library and Add a Matterport Space

First, add the 3D Showcase SDK to your web application by including the Javascript library. This line goes in the `<head>` tag with your other includes.

``` javascript
<script
src='https://static.matterport.com/showcase-sdk/1.1.0-43-g347d8a3/sdk.js'>
```

Next, embed a Matterport Space on your web page with an `<iframe>` tag. [Learn more about embedding](https://support.matterport.com/hc/en-us/articles/115004549347-Embed-a-Space-with-an-iframe-).

Add the **&play=1** URL parameter to automatically load the `<iframe>` when the page loads for a better user experience. Give it an ID you will use later.

``` html
<iframe width=”853” height=”480”
src=”https://my.matterport.com/show/?m=SxQL3iGyoDo&play=1”
frameborder=”0” allowfullscreen allow="vr"
id=”showcase_iframe”></iframe>
```

## Connect to the Matterport Space

Now in the Javascript code for your web application, connect to the Matterport Space.

You’ll want to wait until the `<iframe>` containing the Matterport Space loads. Connecting happens after you’ve included the SDK library.

``` javascript
var iframe = document.getElementById('showcase_iframe');

iframe.addEventListener('load', showcaseLoader, true);

function showcaseLoader() {
  try {
    var showcase = window.SHOWCASE_EMBED_SDK.connect(
      iframe, // Obtained earlier
      'abc123456789', // Your API key
      '3.0' // SDK version you are using
      // Use the latest version you can for your app
      )
      .then(loadedShowcaseHandler)
        // refer to docs for Model.Event.MODEL_LOADED
      .catch(handleError);
  }
  catch (e) {
    console.error(e);
  }
};
```

Parameter | Description
:---: | ---
`showcase_iframe` | The value you put for the the `id` parameter in the `<iframe>` tag earlier.
`applicationKey` | Your API key is unique to your website domain. Contact <developers@matterport.com> to get your API key. Your API key is limited to your website’s domain (example.com) and will not work with subdomains (something.example.com).


<div class="note">For local development, you’ll need to run your app off a local web server. We recommend using a NodeJS server.</div>


## Control 3D Showcase with Actions

Now you’ll want to make an action for 3D Showcase to execute. In the code for your web application, add this to a Javascript function where desired. Refer to the [reference docs](reference/index.html) for a list of all the actions you can do.

```javascript
showcase.<action>(<arguments>).then(successCallback)
.catch(errorCallback);

// ...

// What to do if action was successful
function successCallback(message) { console.log(message); }

// What to do if the action failed
function errorCallback(err) { console.error(err); }
```

Parameter | Description
:---: | ---
`<action>` | The action you want 3D Showcase to do.
`<arguments>` | The arguments for that action.


## Listen to Events from 3D Showcase

Listening for events from 3D Showcase is done in a similar way.

```javascript
showcase.on(<event_name>, function (<state_arguments>) {
  // what to do when this event happens
});
```

Parameter | Description
:-----: | -----
`<event_name>` | Event you’re listening for
`<state_arguments>` | Return values related to this event. These tell you about the new state of 3D Showcase after this event has happened.


## Use the Metadata

Finally, you can grab metadata about the entire Matterport Space by calling `getModelData()` and `getModelDetails()` in your web app. For example:

``` javascript
mpSdk.Model.getModelData()
  .then(function(model) {
    // Model data successfully retrieved
    console.log('Model sid:' + model.sid);
  })
  .catch(function(error) {
    // Problem retrieving model data
  });
```

Metadata is only available **after** you have successfully connected to the Matterport Space.


## Explore the Reference Docs

We've organized our [SDK reference docs](reference/index.html) around modules (features) within 3D Showcase. If you're new to the SDK docs, here's a short description of each module.

Name | Description
:---: | ---
[Globals](reference/index.html) | Things related to the entire SDK, including subscribing (listening) and unsubscribing to events.
[Camera](reference/modules/camera.html) | Related to the end-user's view and what they currently see.
[Floor](reference/modules/floor.html) | How many floors in the space and moving between floors.
[Mattertag](reference/modules/mattertag.html) | Getting and reading content from Mattertag™ Posts.
[Mode](reference/modules/mode.html) | Related to the end-user's current viewing mode (Dollhouse, Floorplan, Inside View, etc)
[Model](reference/modules/model.html) | Related to the metadata of the Matterport Space as a whole
[Sweep](reference/modules/sweep.html) | Moving to a specific sweep/pano within the entire space
[Tour](reference/modules/tour.html) | Related to the Highlight Reel and Guided Tour functionality

Within each module, the reference docs are organized in this way:
- **Enumerations** - Typically these are events that you can listen to. Enums also include values of specific parameters for your actions.
- **Types** - Definitions of objects and the primitives that they contain. These objects are used in the actions below.
- **Functions** - Actions you can execute. Actions typically show the user something new or otherwise change the state of 3D Showcase.


## See a Sample App

See what’s possible with the Matterport 3D Showcase SDK.

Name | Description
:---: | ---
[Showcase Replicator by Matterport](https://matterport.github.io/showcase-sdk-sample-app/app/) | This app simply replicates all the possible 3D showcase actions in simple UI buttons.


### [Return to the main page](index.md)
