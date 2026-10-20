---
layout: article
title: 'SolidJS Babel Plugin 2.0 RC.16: Better Diagnostics & Server Components'
description: 'The SolidJS Babel plugin RC enhances diagnostics with source locations and refactors server components by removing binding slots.'
photo: 'https://opengraph.githubassets.com/acb29542a5e52006cfc6c65d3682c781b8492a73c6fc340714123a63ef0db891/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, tooling, dx, release]
significance: 2
---

## Summary & Key Takeaways

- `sourceNames` now includes a `locations` kind, providing `file:line:col` for diagnostics.
- The plugin gains a `root` option to specify the base directory for source locations.
- `createComponent` and binding labels now carry source location information for better debugging.
- Server components have removed binding slots, with client components in slots replacing them for client-side behavior.
- SSR now evaluates ref expressions alongside spreads, ensuring hydration IDs align.

## Our Commentary

Similar to the compiler, the SolidJS Babel plugin RC is getting better diagnostic reporting with source locations. This is just good engineering. The server component changes, specifically the removal of binding slots, are a consistent theme across these RCs. It's a clear direction for Solid 2.0's server story. The ref evaluation fix for SSR is also a subtle but important detail for hydration correctness.
