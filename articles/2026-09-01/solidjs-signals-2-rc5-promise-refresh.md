---
layout: article
title: 'SolidJS Signals 2.0 RC.5 Introduces Promise-Based Refresh'
description: "The latest SolidJS Signals release candidate allows `refresh(target)` to return a promise for the target's quiescent state, enhancing async reactivity control."
photo: 'https://opengraph.githubassets.com/b201378149251c9de1d102f3c37ccca2c9f901a1e4f2d92629145687b0691427/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.5'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.5
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, javascript, performance]
significance: 2
---

## Summary & Key Takeaways

- `refresh(target)` now returns a promise that resolves when the target's re-ask has settled.
- This allows for awaiting the completion of a refresh operation, improving async flow control.
- Failed re-asks now reject the promise, enabling better error handling in actions.
- Disposed nodes are now explicitly refused by `updateIfNecessary`, preventing certain bug classes.

## Our Commentary

This `refresh` promise is a subtle but powerful addition to Solid's reactivity model. It gives developers more granular control over async operations, which is always welcome. I appreciate the focus on ensuring quiescence, not just flight identity. It feels like a natural evolution for a framework so deeply rooted in fine-grained reactivity.
