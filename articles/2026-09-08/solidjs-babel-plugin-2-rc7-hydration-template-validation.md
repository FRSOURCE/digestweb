---
layout: article
title: 'SolidJS Babel Plugin 2.0 RC.7 Enhances Hydration & Template Validation'
description: 'The SolidJS Babel Plugin 2.0 RC.7 includes fixes for hydration ID alignment and improved document-shell template validation, mirroring compiler enhancements.'
photo: 'https://opengraph.githubassets.com/b19b75164c9124dc021693f4cc0f7bed00595f2be4962c2972aecf6c55b1fb18/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- Hydration IDs are now correctly aligned with intrinsic elements and reactive spreads.
- Document-shell templates are validated within the document context, preventing compile errors.
- The plugin no longer fails on root components owning the document shell.
- The experimental patch channel and its related compiler option are removed.
- This contributes to a ~900 B brotli size reduction for store-family app bundles.

## Our Commentary

It's great to see the Babel plugin keeping pace with the core compiler's improvements. Consistent behavior across different build tools is essential for a smooth developer experience. These fixes, while technical, directly impact the reliability and correctness of SolidJS applications, especially those dealing with hydration.
