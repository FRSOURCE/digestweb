---
layout: article
title: 'SolidJS 2.0.0-rc.15 Core Updates: Hydration, HMR, & Error Handling'
description: 'The latest SolidJS 2.0.0 release candidate brings fixes for hydration, hot module reloading, error boundary rejections, and re-exposes `onHydrationEnd`.'
photo: 'https://opengraph.githubassets.com/76ac92f0994f1f8445512271d99e267cff38d87226a9544f2c994f10cc596340/solidjs/solid/releases/tag/solid-js%402.0.0-rc.15'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.15
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release, dx]
significance: 2
---

## Summary & Key Takeaways

- `dynamicComponent` is moved into `solid-js`, with `@solidjs/web` re-exporting it.
- Fixes for unhandled rejections in `Errored` boundaries during SSR.
- Hydration IDs for SSR `Errored` fallbacks are now preserved on retry.
- Mounted context IDs are preserved during hot module evaluation.
- `lazy()` and `lazyModule()` no longer cache loader promises created during hydration traces.
- `onHydrationEnd` is re-exposed as a public `@experimental` API for end-to-end testing.

## Our Commentary

This is the core `solid-js` package RC, and it's got some good stuff. Making `onHydrationEnd` public again, even as experimental, is a win for testing and debugging hydration issues. The HMR and error boundary fixes are also crucial for a smooth developer experience. It feels like they're really buttoning up the rough edges for 2.0.0, which is exactly what you want to see in an RC.
