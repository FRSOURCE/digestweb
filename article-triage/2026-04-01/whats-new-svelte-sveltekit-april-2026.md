---
layout: article
title: "What's New in Svelte & SvelteKit: April 2026 Updates"
description: 'Svelte and SvelteKit receive a host of updates, including improved configuration, enhanced type safety, and server-side error boundaries.'
photo: 'https://picsum.photos/id/106/800/450'
original_url: https://svelte.dev/blog/whats-new-in-svelte-april-2026
source_name: 'Svelte Blog'
source_author: ''
tags: [svelte, frameworks, release, dx]
significance: 3
---

## Summary & Key Takeaways

- The Svelte team released their April 2026 "What's New" update, detailing several enhancements across the framework and its meta-framework, SvelteKit.
- A new best practices guide has been added to the Svelte documentation.
- Svelte's OpenCode configuration is now located in a dedicated `.opencode/` folder, simplifying its management.
- The `svelte.config.js` file now supports functions for setting options like `css`, `runes`, and `customElement`, centralizing configuration logic.
- New types such as `TweenOptions`, `SpringOptions`, `SpringUpdateOptions`, and `Updater` are now exported from `svelte/motion`, improving type safety for animation utilities.
- SvelteKit introduces server-side error boundaries, allowing for more robust error handling in server-rendered applications.
- Page and layout parameters with matchers now benefit from type narrowing in `$app/types`, enhancing type safety when working with route parameters.

## Our Commentary

This is a solid update for the Svelte ecosystem. The move to functions in `svelte.config.js` is a smart one, centralizing configuration and making it more programmatic. Server-side error boundaries in SvelteKit are a huge win for reliability, and the continued focus on type safety, especially with param narrowing, shows a commitment to developer experience. It's these kinds of incremental, thoughtful improvements that make a framework truly robust.
