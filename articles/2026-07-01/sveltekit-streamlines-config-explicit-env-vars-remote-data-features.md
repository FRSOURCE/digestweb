---
layout: article
title: 'SvelteKit Streamlines Config, Adds Explicit Env Vars & Remote Data Features'
description: "SvelteKit's July update introduces the ability to configure projects directly in vite.config.js, previews explicit environment variables, and enhances remote function and query capabilities. These changes pave the way for SvelteKit 3."
photo: 'https://picsum.photos/id/295/800/450'
original_url: https://svelte.dev/blog/whats-new-in-svelte-july-2026
source_name: 'Svelte Blog'
source_author: ''
tags: [svelte, frameworks, release, dx]
significance: 3
---

## Summary & Key Takeaways

• SvelteKit projects can now define their configuration directly within `vite.config.js`, removing the need for a separate `svelte.config.js`.
• A preview of explicit environment variables is available, intended to replace `$env/*` modules in SvelteKit 3.
• Remote function commands can now directly receive `File` objects, simplifying file uploads.
• Remote queries gain the ability to refresh other queries, improving data invalidation workflows.
• Prerendered `.md` and `.mdx` files are now precompressed for faster delivery.
• SvelteKit warns about optional boolean fields in remote form schemas to prevent silent failures.
• The `prerender.handleInvalidUrl` option allows customizing how invalid URLs are reported during crawling.
• New types `RemoteFormEnhanceInstance` and `RemoteFormEnhanceCallback` are exported for better type safety.

## Our Commentary

This `vite.config.js` integration for SvelteKit is a huge DX win. I've always found the separate config file a bit redundant when Vite is already the core. The explicit env vars are also a welcome move towards clarity. We're seeing a lot of quality-of-life improvements here that make SvelteKit feel even more polished. It's good to see the toolchain catching up with new Svelte features too.
