---
layout: article
title: 'SolidJS 2.0 RC.9: Enhanced Diagnostics & Tree-Shaking'
description: 'SolidJS 2.0 Release Candidate 9 refines its attribution engine, improving diagnostics and enabling better tree-shaking for smaller bundles.'
photo: 'https://opengraph.githubassets.com/b42af302471993de3b2b7491dc0c2c8597aa2ae5d879d4e637da02dcd9485e06/solidjs/solid/releases/tag/%40solidjs/diagnostics%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fdiagnostics%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, tooling]
significance: 2
---

## Summary & Key Takeaways

- Attribution engine's folds, queries, and formatters are now named exports from `solid-js/attribution`.
- This allows consumers to tree-shake unused diagnostic parts, reducing bundle size by ~1,150 B brotli.
- Rerun records are now serializable, and `RerunEvent` no longer carries the live node, using `nodeId` instead.
- `AttributionCostTables` and `AttributionFeedbackTables` are new types for diagnostic data.
- The `attribution` object retains core functions like `enable`, `disable`, and `subscribe`.

## Our Commentary

I'm always happy to see improvements in developer diagnostics and bundle size. The tree-shaking for the attribution engine is a smart move; it means we get powerful debugging tools without paying for them in production if we don't need them. And serializable rerun records? That's a win for anyone trying to analyze performance data outside the browser.
