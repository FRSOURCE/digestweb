---
layout: article
title: 'SolidJS Compiler 2.0 RC.16: Source Maps & Server Component Refactor'
description: 'The SolidJS compiler RC improves diagnostics with precise source locations and removes binding slots in server components.'
photo: 'https://opengraph.githubassets.com/3ae323c78b077a386caa7e2a44efd01a85543ef9a7d5459513b2a327df73e7d9/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, tooling, dx, release]
significance: 2
---

## Summary & Key Takeaways

- `sourceNames` now includes a `locations` kind, providing `file:line:col` for diagnostics.
- `transform()` gains a `root` option to specify the base directory for source locations.
- `createComponent` and binding labels now carry source location information for better debugging.
- Server components have removed binding slots, with client components in slots replacing them for client-side behavior.
- Related types, entries, position markers, and the `serverComponents` compiler option effect have been removed.

## Our Commentary

The SolidJS compiler RC brings some solid DX improvements with source location reporting. Pinpointing exactly where an issue originates in compiled code is always a win. The removal of binding slots in server components is a more substantial architectural shift. It feels like a simplification, pushing towards a clearer separation of client and server concerns. I'm curious to see how this impacts existing server component patterns.
