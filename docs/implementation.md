# Using the SDK



## Include the Library & Connect

First, add the 3D Showcase SDK to your web application by including the Javascript library. This line goes in the `<head>` tag with your other includes.

```javascript
<script src='https://static.matterport.com/showcase-sdk/latest.js'>
```

<div class="admonition note"><p>This exact URL is subject to change.  Please contact <a href="mailto:developers@matterport.com">developers@matterport.com</a> for more details.</p></div>

Next, embed a Matterport Space on your web page with an `<iframe>` tag. [Learn more about embedding](https://support.matterport.com/hc/en-us/articles/115004549347-Embed-a-Space-with-an-iframe-). Add the **&play=1** URL parameter to automatically load the `<iframe>` when the page loads for a better user experience. Give it an ID you will use later.

```javascript
<iframe width=”853” height=”480” src=”https://my.matterport.com/show/?m=SxQL3iGyoDo&play=1”**
frameborder=”0” allowfullscreen allowvr id=”showcase_iframe”></iframe>
```

Now in the Javascript code for your web application, connect to the Matterport Space.

You’ll want to wait until the `<iframe>` containing the Matterport Space loads. Connecting happens after you’ve included the SDK library.

``` javascript
var iframe = document.getElementById('<showcase_iframe>');

iframe.addEventListener('load', showcaseLoader, true);

function showcaseLoader() {
  try {
    var showcase = window.SHOWCASE_EMBED_SDK.connect({
      applicationKey: 'abc123456789',
      iframe: iframe
      })
      .then(loadedShowcaseHandler) // refer to showcase.Events.MODEL_LOADED docs
      .catch(handleError);
  }
  catch (e) {
    console.error(e);
  }
};
```

Parameter | Description
:---: | ---
`showcase_iframe` | The value you put for the the `id` parameter in the `<iframe>` tag.
`applicationKey` | Your API key is unique to your website domain. Contact <a href="mailto:developers@matterport.com">developers@matterport.com</a> to get your API key.<br/><br/>Your API key is limited to your website’s domain (example.com) and will not work with subdomains (something.example.com).


For local development, you’ll need to run your app off a local web server. We recommend using a NodeJS server.



## Control with Actions

Now you’ll want to make an action for 3D Showcase to execute.

In the code for your web application, add this to a Javascript function where desired.

```javascript
showcase.<action>(<arguments>).then(successCallback).catch(errorCallback);

// ...

// What to do if action was successful
function successCallback(message) { console.log(message); }

// What to do if the action failed
function errorCallback(err) { console.error(err); }
```

Parameter | Description
:---: | ---
`<action>` | The action you want 3D Showcase to do. [See all possible actions](actions.md).
`<arguments>` | The arguments for that action. [Read the docs](actions.md) for each action to see what arguments are available.



## Listen to Events

Listening for events from 3D Showcase is done in a similar way:

```javascript
showcase.on(<event_name>, function (<state_arguments>) {
 // what to do when this event happens
});
```

Parameter | Description
:-----: | -----
`<event_name>` | Event you’re you’re listening for. [See all possible events](events.md).
`<state_arguments>` | Return values from providing information about the new state of 3D Showcase after the event. [Read the docs](events.md) for each event to see what is returned.



## Use the Metadata

Finally, you can grab metadata about the Matterport Space by referencing this variable:

```
showcase.metadata
```

This variable is only available **after** you connect to the Matterport Space.

[Learn more](metadata.md) about what’s included in the metadata.



## Sample Applications

See what’s possible with the Matterport 3D Showcase SDK:

Name | Description
:---: | ---
[Showcase Replicator by Matterport](https://github.com/matterport/showcase-sdk-sample-app) | This app simply replicates all the possible 3D showcase actions in simple UI buttons.

<div class="admonition info">This URL for any sample apps is subject to change.  Please contact <a href="mailto:developers@matterport.com">developers@matterport.com</a> for more details.</div>


[Return to the main page](index.md)
