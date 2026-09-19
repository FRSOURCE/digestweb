---
layout: article
title: 'SolidJS 2.0 RC.9: Babel Plugin Aligns with Compiler Optimizations'
description: "SolidJS 2.0 Release Candidate 9's Babel plugin incorporates the latest compiler optimizations for spread props, event handlers, and getter keys."
photo: 'https://opengraph.githubassets.com/a280b31b72229026360148a7dd92ae21f0a8966f81661571f47bbdd9d8b2c0ee/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, tooling, babel]
significance: 2
---

## Summary & Key Takeaways

- The Babel plugin now compiles native elements with multiple spread sources to the runtimes' array form.
- This change improves client-side `spread()` and server-side `ssrElement()` performance by avoiding `mergeProps()`.
- Delegated event handlers are now stamped with `_$$<type>` keys to prevent conflicts with Solid 1.x.
- Non-identifier getter keys in compiled props literals are emitted as string literals, optimizing build cost.
- These updates ensure better compatibility and performance for SolidJS applications using Babel.

## Our Commentary

It's good to see the Babel plugin keeping pace with the core compiler changes. For many, the Babel plugin _is_ the compiler, so these updates mean that the performance and compatibility benefits are immediately available to a wide range of SolidJS users. It's a solid step towards a smoother 2.0 transition.
