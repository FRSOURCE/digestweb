---
layout: article
title: 'SolidJS Signals v2.0.3: `markRaw` Now Supports Classes'
description: 'SolidJS Signals v2.0.3 enhances `markRaw` to accept classes, preventing instances and subclasses from being wrapped by stores. This is useful for self-managing objects.'
photo: 'https://opengraph.githubassets.com/ab4b3768181a3091a807fd969714f6c5bfab31388fadbdc22098fbdfb50682ae/solidjs/solid/releases/tag/%40solidjs/signals%402.0.3'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.3
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, framework]
significance: 2
---

## Summary & Key Takeaways

- The `markRaw` function is now exported from `solid-js` and accepts class constructors.
- Using `markRaw(MyClass)` prevents all instances of `MyClass` and its subclasses from being wrapped by Solid stores.
- This feature is designed for self-managing objects, such as those with their own subscribers or private fields.

## Our Commentary

This `markRaw` update for classes is a smart move. It gives developers more granular control over reactivity, which is crucial when you're trying to optimize performance or integrate with libraries that manage their own state. I appreciate the clarity it brings to managing complex object graphs.
