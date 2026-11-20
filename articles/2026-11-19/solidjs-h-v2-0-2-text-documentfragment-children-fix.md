---
layout: article
title: 'SolidJS H v2.0.2: Text & DocumentFragment Children Fix'
description: 'SolidJS H v2.0.2 resolves an issue where Text or DocumentFragment children were incorrectly read as props instead of being inserted as nodes.'
photo: 'https://opengraph.githubassets.com/4b1178df0e11473a914eb7d3cc7d8ee36f0721a1aa517f1d14e8608265a91bcf/solidjs/solid/releases/tag/%40solidjs/h%402.0.2'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fh%402.0.2
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, framework]
significance: 1
---

## Summary & Key Takeaways

- Text nodes and DocumentFragments passed as children to `h` functions are now correctly inserted as DOM nodes.
- Previously, these types of children were mistakenly interpreted as component properties.

## Our Commentary

This is a small but important fix for Solid's hyperscript utility. It's about ensuring predictable behavior when constructing elements programmatically. It's the kind of fix that prevents unexpected rendering issues for those who prefer `h` over JSX.
