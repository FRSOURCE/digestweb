---
layout: article
title: 'SolidJS 2.0 RC.9: Internal Refinements for Performance'
description: 'SolidJS 2.0 Release Candidate 9 moves internal runtime seams and introduces lazy views for `merge()` and `omit()` to optimize prop handling.'
photo: 'https://opengraph.githubassets.com/4e8e3140ee16af294cea4291a6fa48a34ca9b8462091189dd70bb27081448194/solidjs/solid/releases/tag/%40solidjs/universal%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Funiversal%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance, frameworks]
significance: 1
---

## Summary & Key Takeaways

- Internal runtime seams are moved off the `solid-js` surface to `solid-js/internal` for better encapsulation.
- `merge()` and `omit()` now return lazy views, optimizing how props are read leaf by leaf.
- This change improves performance for spread and SSR element rendering by avoiding proxy traps.
- TypeScript declarations no longer expose internal API names, improving developer experience.
- Ensures a single reactive engine guarantee remains untouched at runtime.

## Our Commentary

This is deep in the SolidJS internals, but it's the kind of work that pays off in performance. Moving internal APIs behind a subpath is just good hygiene. I appreciate the focus on lazy views for props; it's a subtle change that can have a real impact on rendering speed, especially in complex component trees.
