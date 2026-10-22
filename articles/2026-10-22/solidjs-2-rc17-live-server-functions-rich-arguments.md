---
layout: article
title: 'SolidJS 2.0 RC.17: Live Server Functions, Rich Arguments, and Streaming'
description: 'This release candidate for SolidJS 2.0 introduces experimental live server functions, support for files and blobs in server function arguments, and improved `renderToStream` error reporting.'
photo: 'https://opengraph.githubassets.com/0526fc6b7ad536e0e43726101cefb88e8629d1dcd978c0f8e95e5faaaa7af30a/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.17'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.17
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, web-platform]
significance: 3
---

## Summary & Key Takeaways

- Experimental `broadcast(fn)` enables live server functions that share a single render across multiple viewers.
- `live(fn)` now implicitly uses GET requests, optimizing client-side bundles.
- Server functions can now accept files and blobs as arguments using `enableRichArguments()`.
- `renderToStream` now reports serialization failures through the server error hook.
- Live server component slot records are now committed in a single write, preventing inconsistent states.

## Our Commentary

This is a meaty RC. The `broadcast(fn)` feature for live server functions sounds genuinely innovative; I'm trying to wrap my head around the implications for real-time data. It feels like a powerful abstraction for shared state. And rich arguments for server functions? That's a huge quality-of-life improvement. We've all wrestled with file uploads. This is a solid step towards Solid 2.0.
