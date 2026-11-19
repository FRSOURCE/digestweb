---
layout: article
title: 'SolidJS Element v2.0.1: Custom Element Props Now Enumerable'
description: 'SolidJS Element v2.0.1 fixes an issue where declared custom element properties are now enumerable, allowing them to be correctly seen by `...props` and `Object.keys(props)`.'
photo: 'https://opengraph.githubassets.com/993ae46b78a2fe57d125e3efc7a4523f8816cab05fd2c64c0d79c82ab1641106/solidjs/solid/releases/tag/%40solidjs/element%402.0.1'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Felement%402.0.1
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, web-platform, dx]
significance: 1
---

## Summary & Key Takeaways

- Declared properties on Solid custom elements are now correctly enumerable.
- This ensures that operations like object spreading (`{ ...props }`) and `Object.keys(props)` can access these properties.
- The fix improves compatibility and developer experience when interacting with custom element attributes.

## Our Commentary

This is a good fix for Solid's custom element integration. It's a small detail, but making properties enumerable is crucial for predictable behavior when you're trying to inspect or manipulate custom element attributes programmatically. It just makes sense.
