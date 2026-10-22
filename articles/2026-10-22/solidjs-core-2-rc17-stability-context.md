---
layout: article
title: 'SolidJS Core 2.0 RC.17: Reactive System Stability and Context Clarity'
description: 'The core `solid-js` package RC.17 enhances reactive system stability, clarifies context behavior, and updates documentation for better developer understanding.'
photo: 'https://opengraph.githubassets.com/4699974e88cebfaae0732e03954a3ac08bf5ba8d9cff15aada5aca6e6f36f919/solidjs/solid/releases/tag/solid-js%402.0.0-rc.17'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.17
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, dx, release]
significance: 2
---

## Summary & Key Takeaways

- Cleanup functions that throw errors no longer halt the entire teardown process.
- `ContextNotFoundError` messages are now more explicit, guiding developers on `undefined` vs `null`.
- Documentation updates clarify `createDeferred` usage and effect re-run behavior.
- The migration guide notes when `from()` async generator cleanups run.

## Our Commentary

This core update feels like a lot of polish. Making the reactive system more robust against errors is always welcome. The context clarity is a big one for new users, and honestly, for me too sometimes. It's the little things that make a framework feel solid.
