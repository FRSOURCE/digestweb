---
layout: article
title: 'SolidJS 2.0 RC.3: Core Updates, SSR Fixes, and Server Write Deprecation'
description: 'SolidJS 2.0 Release Candidate 3 brings core framework updates, critical SSR hydration fixes, and deprecates setter writes on the server for improved purity.'
photo: 'https://opengraph.githubassets.com/e29bc48ac58932a41b4247ff3d40d9b77ad43257efea132736829c4b38bbabf9/solidjs/solid/releases/tag/solid-js%402.0.0-rc.3'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.3
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release, ssr]
significance: 3
---

## Summary & Key Takeaways

- Setter writes on the server are now deprecated with a `[SERVER_WRITE]` warning, aiming for pure server renders.
- Fixes address async-generator projections and memos freezing after SSR hydration.
- The new `@solidjs/diagnostics` package is now part of the `solid-js` ecosystem.
- Internal refactoring includes collapsing expressions dump and lifting compilers.
- Performance improvements include reusing text nodes for dynamic text in multi-slots.

## Our Commentary

SolidJS 2.0 is shaping up to be a robust release. The deprecation of server-side setter writes is a strong move towards purity, which I appreciate for predictable SSR. The SSR hydration fixes for async generators are also crucial; those kinds of subtle bugs can be a nightmare to track down. It's good to see the core framework getting these foundational improvements.
