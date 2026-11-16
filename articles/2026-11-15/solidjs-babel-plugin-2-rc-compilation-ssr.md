---
layout: article
title: 'SolidJS Babel Plugin 2.0.0-rc.22: Enhanced Compilation & SSR'
description: 'This SolidJS Babel plugin release candidate includes compiler optimizations, fixes for controlled inputs, and improved SSR string literal escaping.'
photo: 'https://opengraph.githubassets.com/cc4c83d03c5608cd5ead7d597ae120b15e97c086b6be93bc5c4932564559bd2a/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, tooling]
significance: 2
---

## Summary & Key Takeaways

- `istanbul`/`c8` ignore pragmas are now correctly handled during compilation.
- DOM output is optimized to avoid unnecessary positional walks, reducing generated code.
- Controlled inputs no longer lose typed text when their signal write is held.
- Production builds compile `<Show>` components to a ternary expression for better performance.
- Server builds now correctly escape string literals in various JSX contexts.

## Our Commentary

The Babel plugin is a core part of the SolidJS build story, so these updates are important. The shared improvements with the main compiler are good, and the specific fix for SSR string literal escaping is a nice touch for server-side rendering reliability.
