---
layout: article
title: 'SolidJS 2.0 RC.5 Fixes Hydration, Enhances Signals'
description: 'SolidJS 2.0 RC.5 addresses a critical hydration desync bug with `<For>` components and integrates the new promise-based `refresh` for signals.'
photo: 'https://opengraph.githubassets.com/535dd29ee24bdb574c5b7af682f439d420ddc9a1ba0a395490302bea43e242df/solidjs/solid/releases/tag/solid-js%402.0.0-rc.5'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.5
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, framework, performance]
significance: 3
---

## Summary & Key Takeaways

- A critical hydration desync bug affecting `<For>` components followed by siblings has been fixed.
- The `refresh(target)` function now returns a promise for the target's quiescent state, allowing async operations to await reactivity settlement.
- This promise-based refresh improves control over async data flows within Solid's reactivity system.
- `updateIfNecessary` now correctly handles disposed nodes, preventing certain runtime errors.

## Our Commentary

The `<For>` hydration fix is a big one; desyncs are notoriously hard to debug and can lead to subtle, frustrating bugs. Combining that with the new promise-based `refresh` for signals makes this a really solid RC. It feels like Solid is tightening up its core, making it even more robust for complex applications. We're seeing a lot of maturity in these RC releases.
