---
layout: article
title: 'SolidJS Compiler 2.0.0-rc.22: Optimizations & Input Fixes'
description: 'This SolidJS compiler release candidate brings DOM output optimizations, fixes for controlled inputs, and improved `<Show>` component compilation.'
photo: 'https://opengraph.githubassets.com/7bc3b8aa89c891e92b3e6672ab5f4a060b16e61a6158afb7b4fb145df6ef18b2/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, tooling]
significance: 2
---

## Summary & Key Takeaways

- `istanbul`/`c8` ignore pragmas are now carried through component and fragment compilation.
- DOM output no longer declares unnecessary positional walks, reducing generated code size.
- Controlled inputs no longer lose typed text when their signal write is held during async derivations.
- Production builds now compile `<Show>` components to a simpler ternary expression when possible, improving performance.

## Our Commentary

Compiler improvements are always welcome, especially when they lead to smaller bundles and better runtime performance. The fix for controlled inputs losing text during async operations is a crucial DX improvement. It's these kinds of details that make a framework feel truly robust.
