---
layout: article
title: 'SolidJS Signals v2.0.2: Robustness for Optimistic Updates & Error Boundaries'
description: 'SolidJS Signals v2.0.2 delivers crucial fixes for optimistic store actions, ensures error boundaries catch failed re-asks, and refines reactivity tracking for class instances.'
photo: 'https://opengraph.githubassets.com/bff4ca306ed2425c6bf997f97d556dd1a56eaa94d40a3c2e6447a619aaa56a2b/solidjs/solid/releases/tag/%40solidjs/signals%402.0.2'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.2
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, framework, performance]
significance: 2
---

## Summary & Key Takeaways

- Prototype getters on class instances within stores now correctly track dependencies.
- Error boundaries now catch failed store re-asks, preventing app halts.
- Issues with overlapping optimistic store actions settling in reverse order are resolved.
- Store setters now correctly join open actions when reading held keys.
- Memory leaks related to unmounted store readers are addressed.
- Improved handling of pending readers and sources in flight.

## Our Commentary

This is a chunky patch for Solid Signals, and it's all about stability. The fixes around optimistic updates and error boundaries are particularly important; these are the areas where reactivity can get really tricky. It's good to see them tightening up the core engine. It makes me feel more confident about building complex, data-intensive applications with Solid.
