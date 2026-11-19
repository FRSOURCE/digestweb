---
layout: article
title: 'SolidJS 2.0.1 Improves Store Reactivity, Updates Tutorial Link'
description: 'SolidJS 2.0.1 brings a crucial fix for store reactivity with frozen objects and arrays, benefiting state management. It also updates the README to link to the new 2.0 tutorial.'
photo: 'https://opengraph.githubassets.com/1747b11bd1b1545f53deca635ca3ed2ba252dbd48910870177b242d36f5c9a97/solidjs/solid/releases/tag/solid-js%402.0.1'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.1
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Frozen plain objects and arrays within a store now wrap and track like unfrozen ones.
- This change enables fine-grained reactivity for libraries that freeze their state, such as XState.
- The package README now correctly links to the SolidJS 2.0 tutorial at docs.solidjs.com/tutorial.
- Includes various bug fixes and internal improvements from dependent packages.

## Our Commentary

This is the core SolidJS package, and that frozen object fix is a big one. It smooths out a common friction point when integrating with other state management patterns. We've all been there, debugging why something isn't reactive when it should be. Also, updating the tutorial link? Small, but important for new users. Good stuff.
