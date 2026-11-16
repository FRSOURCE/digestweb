---
layout: article
title: 'SolidJS 2.0.0-rc.22 Core: Context Memory & Attribution Engine Overhaul'
description: 'The core SolidJS 2.0.0 release candidate optimizes context providers for memory and significantly refines the attribution engine for better debugging and performance.'
photo: 'https://opengraph.githubassets.com/b938339ce4094ee121dbe23d72032367c5e1326fa5a40412636a5fa3d532e0b6/solidjs/solid/releases/tag/solid-js%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 3
---

## Summary & Key Takeaways

- Context providers no longer create their own owner, reducing memory allocation.
- The flush record now details changes on screen, with one entry per signal, memo, or store property.
- Attribution hooks are streamlined, reducing inputs and improving clarity.
- The `optimisticReverted` hook and per-transaction staged fallbacks have been removed.
- `asyncLanded` hook replaces `asyncStart` + `asyncEnd(direct)` for clearer async landing reports.

## Our Commentary

This is the big one for SolidJS 2.0 RCs. The memory optimization for context providers is a subtle but impactful win. What really catches my eye is the complete overhaul of the attribution engine. This is going to be huge for debugging complex reactivity graphs and understanding exactly what's changing and why. It feels like a significant step towards a more transparent and performant core.
