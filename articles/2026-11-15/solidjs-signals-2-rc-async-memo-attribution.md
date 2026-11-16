---
layout: article
title: 'SolidJS Signals 2.0.0-rc.22: Async Memo & Attribution Engine Refinements'
description: 'SolidJS Signals RC introduces refined async memo behavior and memory optimizations for the attribution engine, improving reactivity and debugging.'
photo: 'https://opengraph.githubassets.com/9781ed7295465ba5acf66b6c8bb658bf677b643c950d445830e38102861a1295/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 2
---

## Summary & Key Takeaways

- Async memos now consistently answer the screen's question for display and the landed world's question for the frame.
- The attribution engine no longer keeps disposed scopes, async sources, and loading boundaries alive.
- `WeakMap` and `WeakRef` are now used for attribution, reducing memory footprint for collected components.
- This improves memory management and debugging for complex reactivity graphs.

## Our Commentary

The changes to the signals package are quite technical, but the memory optimizations in the attribution engine using `WeakMap` and `WeakRef` are a smart move. It's a good example of how SolidJS is pushing the boundaries of reactivity performance and debugging.
