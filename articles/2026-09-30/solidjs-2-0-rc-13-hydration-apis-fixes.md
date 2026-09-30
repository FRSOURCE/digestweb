---
layout: article
title: 'SolidJS 2.0 RC.13 Enhances Hydration & Public APIs'
description: "SolidJS's latest release candidate for version 2.0 introduces a public hydration API and critical fixes, improving server-side rendering and data library integration."
photo: 'https://opengraph.githubassets.com/4354bddb0c1ec44e989eb946e3e54ca0b6c535beae76434cc897f8ac59578ff2/solidjs/solid/releases/tag/solid-js%402.0.0-rc.13'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.13
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, web-platform, dx]
significance: 3
---

## Summary & Key Takeaways

- A new public hydration API is available for data libraries, removing reliance on internal configurations.
- `isHydrating()` indicates if code is claiming server-rendered DOM during hydration or boundary resumption.
- `isHydratable()` checks if the current owner context allows hydration, respecting `<NoHydration>` zones.
- `getHydrationWriter()` provides a server-side channel for writing keyed values during rendering.
- `takeHydrationValue()` allows clients to read and remove values written by the server.
- A fix ensures nodes outside pending streamed boundaries update correctly on client writes after root hydration.
- Streamed boundary owners are now marked pending until resumed or disposed, improving snapshot design consistency.

## Our Commentary

SolidJS 2.0 is shaping up to be a big one, and this RC.13 release really drives that home. The new public hydration APIs are a huge win for the ecosystem; I've seen so many libraries struggle with internal SolidJS configurations. This change should make integration much smoother. The hydration fix is also a relief, ensuring that client-side updates don't get stuck re-adopting server values. We're excited to see SolidJS continue to push the boundaries of performance and developer experience.
