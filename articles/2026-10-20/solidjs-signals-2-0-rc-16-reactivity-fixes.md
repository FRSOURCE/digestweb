---
layout: article
title: 'SolidJS Signals 2.0 RC.16: Reactivity & Error Handling Fixes'
description: 'This SolidJS signals release candidate improves error handling for async operations and refines loading boundary behavior.'
photo: 'https://opengraph.githubassets.com/9d25d9b8df79be37d6e6b9ef0ec844d4c98b35e026c40a2a3d21d4e09f38b32e/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance]
significance: 1
---

## Summary & Key Takeaways

- Synchronous throws from async iterators are now routed to the owning memo's error handling.
- `StatusError` message formatting is now best-effort to prevent replacing original errors.
- `Loading` boundary behavior is fixed, ensuring fallbacks are not prematurely shown.
- Effects and memos catching `NotReadyError` from async derived stores now re-run when the store's flight lands.
- Signal writes from `onCleanup` during transition landings no longer leave the transaction parked.
- Writes are now allowed in cleanups during teardown, preventing reactivity halts in development.

## Our Commentary

More SolidJS 2.0 RC goodness, this time for signals. The fixes around async error handling and `Loading` boundaries are crucial for building robust applications. I've definitely run into tricky situations with async state, so seeing these kinds of stability improvements is reassuring. Allowing writes in cleanups during teardown also feels like a necessary correction for more predictable reactivity.
