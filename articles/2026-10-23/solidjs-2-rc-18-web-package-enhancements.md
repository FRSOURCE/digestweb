---
layout: article
title: 'SolidJS 2.0.0-rc.18: Web Package Enhancements'
description: "This release candidate for SolidJS 2.0.0's web package brings improvements to server functions, live updates, and serialization performance. It refines how data is broadcast and how UI changes are delivered."
photo: 'https://opengraph.githubassets.com/76384d1ff53f0750087e99502b41d8e6d2a5978d448d3689bbcfa93d12dded32/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.18'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.18
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 2
---

## Summary & Key Takeaways

- `broadcast(fn)` now shares data sources, improving efficiency for async iterable returns.
- Live updates for rows with stable markup now send text and attribute edits instead of full HTML.
- `seroval` and `seroval-plugins` updated to 1.7.0, boosting hydration and JSON write performance by 20-35%.
- A `buildId` option added to `configureServerFunctionsServer` prevents function skew across deploys.
- `renderToStream` now completes when the serializer encounters an unhandleable value.

## Our Commentary

SolidJS continues to push the boundaries of fine-grained reactivity and server-side capabilities. The `buildId` for server functions is a smart move to prevent subtle bugs from mismatched client/server code. We're also seeing a focus on optimizing the wire protocol for live updates, which is always a good sign for performance.
