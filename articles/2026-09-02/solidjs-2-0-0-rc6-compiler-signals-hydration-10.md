---
layout: article
title: 'SolidJS 2.0.0-rc.6: Compiler, Signals, and Hydration Enhancements'
description: 'SolidJS releases its sixth release candidate for version 2.0.0, bringing advancements in compiler capabilities, signal attribution, and hydration reliability.'
photo: 'https://opengraph.githubassets.com/6d4ac47c81891508920a18972fdc36083db6a766acc6071224ea65de9dbcf64b/solidjs/solid/releases/tag/solid-js%402.0.0-rc.6'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.6
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, compiler, dx]
significance: 2
---

## Summary & Key Takeaways

- SolidJS 2.0.0-rc.6 introduces a typed semantic IR stage and TSRX typecheck projection in the compiler.
- New dev hooks for signal attribution and async waterfall detection improve debugging.
- Hydration logic is enhanced to handle eager JSX evaluation and prevent overwriting user input.
- Improved error handling for server function calls and unrecognized client transport responses.
- Consistent handling of primitive class values across static, dynamic, and array forms.
- Optimistic store truth-flights now own their transaction for better consistency.
- The Babel plugin gains an experimental TSRX syntax frontend for new control flow.
- Diagnostic names are exposed for renderer-owned effects to aid development.

## Our Commentary

SolidJS 2.0.0-rc.6 is here, and it's packed with some serious under-the-hood work. I'm particularly intrigued by the new TSRX syntax frontend in the compiler and Babel plugin. It feels like Solid is really pushing the boundaries of what a compiler can do for DX. The signal attribution and async waterfall detection are also huge for debugging complex reactive graphs. This is the kind of deep engineering that makes Solid so compelling.
