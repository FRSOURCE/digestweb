---
layout: article
title: 'SvelteKit June 2026: Real-time Data, Enhanced Forms, and Breaking Changes'
description: "SvelteKit's latest update brings a new `query.live(...)` function for real-time data, significant improvements to forms and remote functions, alongside a few breaking changes."
photo: 'https://picsum.photos/id/170/800/450'
original_url: https://svelte.dev/blog/whats-new-in-svelte-june-2026
source_name: 'Svelte Blog'
source_author: ''
tags: [svelte, release, frameworks, dx]
significance: 2
---

## Summary & Key Takeaways

- SvelteKit introduces `query.live(...)` for easier real-time data subscriptions, now async-iterable.
- Form submissions now return a boolean for validity, enhancing remote form handling.
- Remote form fields can directly accept booleans and numbers.
- SvelteKit warns when remote form validation issues are unread, improving UX path detection.
- Breaking changes include `requested(...)` requiring `limit` and `query.batch(...)` support.
- The `.run()` method was removed from remote queries; use `await query()` directly.
- Enhance callbacks now receive a copy of the form remote function instance, with a programmatic `submit()` API.

## Our Commentary

A monthly SvelteKit update is always welcome, and `query.live(...)` for real-time data sounds like a genuinely useful addition. We're seeing a lot of frameworks lean into server-side data fetching and reactivity, and SvelteKit is clearly pushing that boundary. The breaking changes are a bit of a bummer, but that's the nature of a rapidly evolving framework. I'm curious to see how the new form enhancements streamline complex interactions. It feels like SvelteKit is maturing its data story.
