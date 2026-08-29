---
layout: article
title: 'SolidJS 2.0 RC.4: Server Functions, Patch Hydration & Better Diagnostics'
description: 'SolidJS pushes closer to 2.0 with RC.4, featuring new server function invocation, advanced patch-mode list hydration, and enhanced developer diagnostics.'
photo: 'https://opengraph.githubassets.com/36c37b11e1c9924511a79a481710929685a70c657e88ae33ad1e9d154b8fc4da/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.4'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.4
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release, dx]
significance: 3
---

## Summary & Key Takeaways

- SolidJS 2.0.0-rc.4 introduces `invoke(fn, options, ...args)` for per-call server function invocation.
- New patch-mode list hydration improves performance by claiming and registering rows positionally.
- The list driver now supports keyed `<For>` over store arrays with optimized row operations.
- Enhanced diagnostics include `DEV.diagnostics.setConsoleFooter(fn)` for point-of-pain discovery.
- The compiler registers call-shaped component bindings for improved Hot Module Replacement (HMR).
- Hydration-latched computations now correctly handle mid-stream dependency changes.
- Babel plugin and native compiler ensure consistent patch-mode output and hydration ID parity.

## Our Commentary

SolidJS 2.0 is shaping up to be a beast. The server function invocation is a big deal, pushing Solid further into full-stack territory. And the patch-mode list hydration? That's the kind of deep-level performance optimization that makes Solid so compelling. I'm also genuinely excited about the improved diagnostics; anything that makes debugging reactivity easier is a win in my book. This RC feels like a very solid step forward.
