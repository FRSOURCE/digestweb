---
layout: article
title: 'SolidJS Signals 2.0.1 Improves Store Tracking for Frozen Objects'
description: 'This patch release for SolidJS Signals enhances store tracking for frozen plain objects and arrays, benefiting libraries like XState. It also includes client bundle size reductions.'
photo: 'https://opengraph.githubassets.com/e3120f0eba7555c245c070ad24d9967afd3b5871a6684546dbe2795dd71cc718/solidjs/solid/releases/tag/%40solidjs/signals%402.0.1'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.1
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 2
---

## Summary & Key Takeaways

- Frozen plain objects and arrays within a store now wrap and track like unfrozen ones.
- This change enables fine-grained reactivity for libraries that freeze their state, such as XState.
- Client bundles are smaller, with a reported 88 B Brotli drop for a compiled hello world.
- Fixes an issue where a disposed dependency kept a memo pending.
- Addresses a bug where an effect reading a derived writable signal re-ran incorrectly.
- Portals rendered inside other portals now mount after their parent's content, restoring 1.x behavior.

## Our Commentary

This is a patch release, but that fix for frozen objects in stores is a big deal for anyone using Solid with state machines or other libraries that freeze their data. We've seen so many subtle bugs crop up from unexpected immutability interactions. It's a relief to see this addressed. The bundle size reduction is always welcome, too.
