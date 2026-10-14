---
layout: article
title: 'SolidJS 2.0.0-rc.15 Compiler Enhancements for SSR & Input Bindings'
description: 'The latest SolidJS 2.0.0 release candidate for the compiler brings improvements to element claims, input binding behavior, and SSR link marking.'
photo: 'https://opengraph.githubassets.com/ffb2bdb478e3487bfd238f5b5dac8345f626417e9b734613b67d4b6279cfe4e3/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.15'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.15
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release, tooling]
significance: 1
---

## Summary & Key Takeaways

- Element claims are now emitted after initial attributes, ensuring parity across compilers.
- Non-hydratable client builds correctly remove `value` attribute for nullish checkbox/radio inputs.
- Select's bound value is reapplied when options arrive after the value was written.
- `lazyModule()` is added for preloading and hydrating non-component lazy modules.
- SSR now allows routers to mark links in server HTML, improving link state handling.

## Our Commentary

Another SolidJS 2.0.0 RC, this time for the compiler. It's a collection of solid fixes and minor features. The `lazyModule()` addition is neat for non-component lazy loading, and the SSR link marking is a good quality-of-life improvement for routing integrations. These are the kinds of details that make a framework feel polished, even if they aren't headline-grabbing.
