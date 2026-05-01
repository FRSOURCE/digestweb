---
layout: article
title: "What's New in Svelte & SvelteKit: May 2026 Update"
description: "Svelte's May update brings TypeScript 6.0 support, significant SvelteKit remote function enhancements, and experimental community plugins to the Svelte CLI."
photo: 'https://picsum.photos/id/854/800/450'
original_url: https://svelte.dev/blog/whats-new-in-svelte-may-2026
source_name: 'Svelte Blog'
source_author: ''
tags: [svelte, frameworks, release, typescript]
significance: 3
---

## Summary & Key Takeaways

- SvelteKit now supports TypeScript 6.0 and introduces new features for form fields and remote function transport.
- Remote function transport now uses `hydratable`, enabling richer data types in query results.
- Form submissions now return a boolean for validity, enhancing remote functions.
- Several breaking changes were introduced for remote functions, including server permission for client-requested query refreshes and stabilized caching.
- Community add-ons are now available as an experimental feature in the Svelte CLI (`sv`).
- The `sv` and `sv-utils` packages have been separated in the CLI for a more explicit public API.
- Types for `TweenOptions`, `SpringOptions`, `SpringUpdateOptions`, and `Updater` are now exported from `svelte/motion`.

## Our Commentary

This is a solid monthly update from the Svelte team. The TypeScript 6.0 support is a welcome upgrade, keeping SvelteKit current with the broader ecosystem. The remote function enhancements, while including some breaking changes, seem to be pushing towards a more robust and type-safe data handling experience, which is crucial for complex applications. We're particularly interested in the experimental community add-ons in the Svelte CLI; this could significantly boost the framework's extensibility and developer experience if it gains traction. It's great to see Svelte continuing to evolve its core and tooling.
