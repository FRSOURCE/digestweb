---
layout: article
title: 'SolidJS Babel Plugin 2.0 RC.5 Improves Markup Validation'
description: "SolidJS Babel Plugin RC.5 now fails compilation when JSX markup would be restructured by the browser's HTML parser, preventing runtime issues."
photo: 'https://opengraph.githubassets.com/e1df50b7513cff17ed7c4b35d36ac9018722265ec953eb5dc086a1810be412f8/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.5'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.5
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- The validator now fails compilation instead of warning when a template's markup would be restructured by the browser.
- This prevents desynced hydration and silently misplaced bindings in the DOM.
- Errors now provide a clear code frame pointing to the offending JSX.
- Universal text handling and hydration ID fixes from the compiler are also included.

## Our Commentary

I love this change. Silently shipping broken hydration or misaligned bindings because of a warning buried in server logs is a nightmare. Forcing a compile-time error for invalid HTML markup is a huge win for developer experience. It's a clear signal that something is wrong, right when you write the code, which is exactly what we need from our tooling.
