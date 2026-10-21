---
layout: article
title: 'SolidJS 2.0 RC.16: Introducing `createDeferred` for Async State'
description: 'The latest SolidJS release candidate unveils `createDeferred`, a new primitive for managing async state, and updates guidance on application-wide state.'
photo: 'https://opengraph.githubassets.com/e1c92874484a3689a1fbfe7511a20f6862e68731a11c386502c468c1d11fcdb3/solidjs/solid/releases/tag/solid-js%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance, dx]
significance: 3
---

## Summary & Key Takeaways

- `createDeferred(fn, options?)` is a new async memo that lags but never leads, holding previous answers during refetches.
- The cheatsheet no longer recommends module-scope state for app-wide state, aligning with `createContext` JSDoc and 2.0 docs.
- `createComponent` now takes a `loc` parameter, providing source site information for diagnostics.
- The console footer is updated to provide clearer documentation links for diagnostic codes.
- JSDoc descriptions and various links now point to the 2.0 reference documentation.

## Our Commentary

This is the big one for SolidJS 2.0 RCs. `createDeferred` is a genuinely interesting new primitive for handling async state. The idea of a memo that lags but never leads is a powerful concept for UX, allowing the UI to remain responsive while new data loads. I'm also glad to see the state management guidance clarified; `createContext` for app-wide state is a much more robust pattern, especially with SSR. These are the kinds of features that make a framework feel truly mature.
