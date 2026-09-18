---
layout: article
title: 'SolidJS 2.0 RC.9: Compiler Optimizations for Performance'
description: 'SolidJS 2.0 Release Candidate 9 introduces compiler optimizations for spread sources and event handlers, improving runtime performance and compatibility.'
photo: 'https://opengraph.githubassets.com/737899324f00ef03f49f5fe23dca110610c0a3e8e7f7b5857ed253aa12d738e8/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, compiler, performance]
significance: 2
---

## Summary & Key Takeaways

- Native elements with multiple spread sources now compile to array form for `spread()` and `ssrElement()`.
- This avoids `mergeProps()` calls, reducing runtime overhead and hydration IDs.
- Delegated event handlers move from `$$<type>` to `_$$<type>` keys to prevent conflicts with Solid 1.x runtimes.
- Compiler emits non-identifier getter keys as string literals (`get "aria-label"() {}`) instead of computed keys.
- This getter key optimization can reduce build costs by ~45% for prop literals.

## Our Commentary

Compiler optimizations are often unsung heroes. The changes to how spread props are handled and the event delegation key change are crucial for both performance and preventing headaches when mixing Solid 1 and 2. And that getter key optimization? It's a small detail, but those micro-optimizations add up to a snappier application.
