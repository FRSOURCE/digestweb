---
layout: article
title: 'SolidJS 2.0 RC.9: Faster Props with Lazy Merge & Omit Views'
description: 'SolidJS 2.0 Release Candidate 9 optimizes `merge()` and `omit()` to always use lazy views, drastically improving props handling performance.'
photo: 'https://opengraph.githubassets.com/74ded13069412f0be93582773e117e9fb6ec91c8b13f2e52357fd8eebd60b499/solidjs/solid/releases/tag/%40solidjs/html%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fhtml%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance, dx]
significance: 2
---

## Summary & Key Takeaways

- `merge()` and `omit()` now consistently return lazy views, even for plain objects.
- This avoids eager copying, leading to O(1) views over flattened sources.
- Nested `omit()` operations fold their filters, and `merge()` over `omit()` handles views efficiently.
- Construction cost for prop chains drops significantly (3–7x), improving SSR performance by ~2.4x.
- Reads remain cheap, resolving keys once on first access and performing single lookups thereafter.

## Our Commentary

This is a fantastic performance win, especially for those of us building or using headless UI libraries. The idea that a complex chain of `merge` and `omit` operations can collapse to leaf views over original objects, with no proxy layer in between, is just _chef's kiss_. It's the kind of optimization that makes SolidJS feel even faster without changing how we write code.
