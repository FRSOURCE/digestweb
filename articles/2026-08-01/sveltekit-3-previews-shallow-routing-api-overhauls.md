---
layout: article
title: 'SvelteKit 3 Previews Land with Shallow Routing & API Overhauls'
description: "SvelteKit 3's first @next releases introduce significant changes, including shallow routing, new $app modules, and API updates, offering a glimpse into the framework's future."
photo: 'https://picsum.photos/id/461/800/450'
original_url: https://svelte.dev/blog/whats-new-in-svelte-august-2026
source_name: 'Svelte Blog'
source_author: ''
tags: [frameworks, svelte, release, dx]
significance: 3
---

## Summary & Key Takeaways

• SvelteKit 3's first @next releases are now available for preview.
• Key changes include new $app/manifest and $app/service-worker modules.
• Shallow routing is now built into goto via a new state option.
• refreshAll replaces the deprecated invalidateAll function.
• error(status, {...}) is deprecated, requiring a message.
• Stable SvelteKit releases added a submitted property for remote forms.
• defineEnvVars moved to a dedicated @sveltejs/kit/env subpath.
• Svelte Summit Ljubljana 2026 is scheduled for November 19-20.

## Our Commentary

We're seeing the first glimpses of SvelteKit 3, and it's a lot to take in. Shallow routing baked into `goto` is a big one, simplifying navigation state. The deprecations like `invalidateAll` and the `error` signature change feel like necessary evolutions, but I'm always a little wary of breaking changes, even in previews. It's exciting to see the framework push forward, but also a reminder that keeping up can be a full-time job.
