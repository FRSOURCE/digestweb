---
layout: article
title: 'SolidJS Signals 2.0 RC.17: Enhanced Error Handling and DX'
description: 'The latest SolidJS Signals release candidate improves cleanup error handling, provides clearer `ContextNotFoundError` messages, and refines fallback behavior in `mapArray`.'
photo: 'https://opengraph.githubassets.com/a4c8a81a3c6d650bbe5ed824af634327b9add72bbe4f1b4bcf1e10a964862b73/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.17'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.17
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, dx, release]
significance: 2
---

## Summary & Key Takeaways

- Cleanup functions that throw errors no longer abort the entire teardown process.
- `ContextNotFoundError` messages are now more descriptive, guiding developers to use `null` for optional contexts.
- `mapArray` and `repeat` now retain successful falsy fallbacks when input remains empty.
- Dev messages for `REACTIVITY_HALTED` now include the owner path of the computation that threw.

## Our Commentary

Good to see the core reactivity system getting these stability and DX bumps. The improved error messages for context are a small but mighty win; I've definitely been tripped up by `undefined` vs `null` in contexts before. And making cleanups more resilient to errors? That's just good engineering.
