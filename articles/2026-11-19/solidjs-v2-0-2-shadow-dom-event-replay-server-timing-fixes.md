---
layout: article
title: 'SolidJS v2.0.2: Shadow DOM Event Replay & Server-Timing Fixes'
description: 'SolidJS v2.0.2 brings fixes for shadow DOM event replay during hydration and refines server-timing trace handling for cached responses.'
photo: 'https://opengraph.githubassets.com/65882cdebb24a4e14c4953745302efc66e8f91a60f6ec53b48b914bd15075aee/solidjs/solid/releases/tag/%40solidjs/web%402.0.2'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.2
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, framework]
significance: 1
---

## Summary & Key Takeaways

- Events fired within a shadow root before hydration are now correctly replayed to their handlers.
- Server-Timing traces are no longer carried by route handler responses when a shared cache might store them.
- The decision for trace inclusion now depends on the response's Cache-Control or CDN-Cache-Control headers.

## Our Commentary

We're seeing SolidJS continue to refine its server-side and hydration logic. The shadow DOM event replay fix is a good quality-of-life improvement for component authors. It's these small, precise adjustments that make a framework feel robust.
