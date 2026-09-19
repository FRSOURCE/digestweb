---
layout: article
title: 'SolidJS 2.0 RC.9: Core Reactivity Updates & Optimistic Writes'
description: 'SolidJS 2.0 Release Candidate 9 refines signal behavior, introducing clearer rules for optimistic writes and async memo dependencies.'
photo: 'https://opengraph.githubassets.com/6331e1365669accc6d04bf8c357969b94950664a4f9d3942c4f1df0cacf576bb/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, frameworks, performance]
significance: 2
---

## Summary & Key Takeaways

- Defines when a write becomes visible at flush, ensuring consistent behavior across channels.
- Clarifies that `setOptimistic(v)` becomes the active override at the carrying flush.
- Rewrites a node held by a transaction to keep the staged value for `latest()` until the next flush.
- Corrects documentation for `until()` within actions, requiring a `yield` after `await` before creating readers.
- Ensures an async memo's held landing retains the committed frame's dependencies.

## Our Commentary

Reactivity is the heart of SolidJS, so any changes here are worth noting. The clarification around optimistic writes and async memos feels like a necessary step towards a more predictable and robust system. I'm glad they're tightening up these core behaviors, even if it means a few doc corrections. It makes the mental model more solid.
