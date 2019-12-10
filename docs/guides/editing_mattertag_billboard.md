---
layout: default
title: Editing the mattertag billboard
parent: Guides
nav_order: 2
---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Adding a link to the description
The description supports the following markdown link format:

`[link text](link url)`


The following code snippets produces the image below it.
```javascript
sdk.Mattertag.editBillboard(mattertagSid, {
  description:"[Link to Matterport site!](https://www.matterport.com)",
});
```

<p align="center">
  <img src="{{ site.baseurl }}/assets/images/description-link.png"/><br/>
</p>

## Setting an image media source
We use embedly to present image media. We recommend that you verify your image url with the embedly explore display tool before setting it as a media source.

- Select your image url. For example we will use,

 url: `https://static.matterport.com/mp_cms/media/filer_public/71/ca/71cabc75-99a5-41a4-917c-f45203f9254e/pro-21f8ddbae.png`

<p align="center">
  <a href="https://static.matterport.com/mp_cms/media/filer_public/71/ca/71cabc75-99a5-41a4-917c-f45203f9254e/pro-21f8ddbae.png" target="_blank">
    <img style="height: 200px;" src="https://static.matterport.com/mp_cms/media/filer_public/71/ca/71cabc75-99a5-41a4-917c-f45203f9254e/pro-21f8ddbae.png"/>
  </a>
</p>

- Verify your image is displayed correctly on the embedly explore display tool

<p align="center">
  <a href="https://embed.ly/docs/explore/display/resize?url=https%3A%2F%2Fstatic.matterport.com%2Fmp_cms%2Fmedia%2Ffiler_public%2F71%2Fca%2F71cabc75-99a5-41a4-917c-f45203f9254e%2Fpro-21f8ddbae.png" target="_blank">
    <img style="height: 400px;" src="{{ site.baseurl }}/assets/images/embedly-explore-display.png"/>
  </a>
</p>

- Call [Mattertag.editBillboard]({{ site.baseurl }}/docs/reference/current/modules/mattertag.html#editbillboard) with the media source to update the billboard

```javascript
sdk.Mattertag.editBillboard(mattertagSid, {
  media: {
  type: sdk.Mattertag.MediaType.PHOTO,
  src: 'https://static.matterport.com/mp_cms/media/filer_public/71/ca/71cabc75-99a5-41a4-917c-f45203f9254e/pro-21f8ddbae.png',
});
```

<p align="center">
  <img src="{{ site.baseurl }}/assets/images/mattertag-with-image.png"/><br/>
</p>

## Setting a video media source
We use embedly to present video media. We recommend that you verify your video url with the embedly explore embed tool before setting it as a media source.

- Select your video url. For example we will use,

 url: `https://www.youtube.com/watch?v=uO_x9TFNmTk`

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/uO_x9TFNmTk/0.jpg)](https://www.youtube.com/watch?v=uO_x9TFNmTk){:target="_blank"}

- Verify your video is displayed correctly on the embedly explore embed tool

<p align="center">
  <a href="https://embed.ly/docs/explore/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuO_x9TFNmTk" target="_blank">
    <img style="height: 400px;" src="{{ site.baseurl }}/assets/images/embedly-explore-embed.png"/>
  </a>
</p>

- Call [Mattertag.editBillboard]({{ site.baseurl }}/docs/reference/current/modules/mattertag.html#editbillboard) with the media source to update the billboard

```javascript
sdk.Mattertag.editBillboard(mattertagSid, {
  media: {
  type: sdk.Mattertag.MediaType.VIDEO,
  src: 'https://www.youtube.com/watch?v=uO_x9TFNmTk',
});
```

<p align="center">
  <img src="{{ site.baseurl }}/assets/images/mattertag-with-video.png"/><br/>
</p>
