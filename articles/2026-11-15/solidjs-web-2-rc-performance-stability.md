---
layout: article
title: 'SolidJS Web 2.0.0-rc.22: Performance & Stability Boosts'
description: 'This release candidate for SolidJS Web brings significant performance optimizations, memory reductions, and critical bug fixes for SSR and hydration.'
photo: 'https://opengraph.githubassets.com/35465e8837f89b1f3b9079f6b9b211a623645510a8ab43c323106924c1b6df4d/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 2
---

## Summary & Key Takeaways

- `renderToStream().pipe()` no longer throws when abandoned during the first write.
- Late-joining viewers to a broadcast now download live ranges once, reducing join time by 80%.
- String class values no longer add unnecessary properties to elements, saving 118 KB and speeding up UI bench renders by 5-10%.
- Serialization of cyclic values now avoids copying parts that don't need replacement.
- `deferStream` sources that reject on the server now hydrate as rejections, triggering client-side refetches.
- Delegated events no longer keep unmounted components alive via `currentTarget`.

## Our Commentary

SolidJS is really tightening things up for 2.0. The performance gains here, especially the 80% reduction in join time for broadcasts and the memory savings from class handling, are genuinely impressive. It feels like they're meticulously polishing every rough edge. I appreciate the focus on these subtle but impactful optimizations.
