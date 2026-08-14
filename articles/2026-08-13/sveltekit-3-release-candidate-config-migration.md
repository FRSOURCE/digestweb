---
layout: article
title: 'SvelteKit 3 RC: Configuration Moves to Vite, $lib to #lib'
description: 'SvelteKit 3 enters Release Candidate phase, introducing breaking changes like moving config to vite.config.ts and changing the $lib alias to #lib. A migration tool is available.'
photo: 'https://picsum.photos/id/274/800/450'
original_url: https://svelte.dev/blog/sveltekit-3-release-candidate
source_name: 'Svelte Blog'
source_author: ''
tags: [svelte, frameworks, release, tooling]
significance: 3
---

## Summary & Key Takeaways

- SvelteKit 3 is now in Release Candidate, with a stable release expected soon.
- Breaking changes include moving configuration from `svelte.config.js` to `vite.config.ts`.
- The `$lib` alias for `src/lib` is now `#lib` to align with modern project practices.
- A migration tool, `npx sv@next migrate sveltekit-3`, is available to automate updates.
- The full list of changes and migration guide are on `next.svelte.dev`.

## Our Commentary

This is a big one for Svelte developers. Moving config to `vite.config.ts` makes so much sense; it always felt a bit disjointed having two config files. The `$lib` to `#lib` change is also a good move for consistency. We're excited to see the stable release soon.
