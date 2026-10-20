---
layout: article
title: 'SolidJS Web 2.0 RC.16: Async Renders & Enhanced Diagnostics'
description: 'The latest SolidJS web release candidate brings consistent async rendering behavior and improved diagnostic source location reporting.'
photo: 'https://opengraph.githubassets.com/0455585538830b2e9056651e31447749210e344ddddc1a000c8c97aaf776e60c/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx]
significance: 1
---

## Summary & Key Takeaways

- Async-mode renders now produce consistent bytes regardless of source settlement order, improving ETag matching.
- `data-*` attributes now type-check correctly in props objects, not just JSX.
- `effect` and `insert` options now include `loc` for better diagnostic reporting at the source site.
- Internal `scriptNonce` and `styleNonce` exports have been removed from the server build.
- Fixes address issues with links inside nested slot regions and streaming document tier writes.

## Our Commentary

Another SolidJS 2.0 release candidate is out, and it's a collection of solid, if not flashy, improvements. I'm particularly interested in the async render consistency; that kind of determinism is a huge win for debugging and reliability. The enhanced diagnostic `loc` reporting is also a welcome quality-of-life improvement for developers. It's all about those small, steady steps towards a stable 2.0.
