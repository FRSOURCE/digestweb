---
layout: article
title: 'Nuxt v4.5.1: Critical Security Patch Addresses RCE, DoS, and Data Leaks'
description: 'Nuxt has released a critical security update, v4.5.1, addressing multiple severe vulnerabilities including server-side RCE, DoS, and cross-user payload disclosure. Users are urged to upgrade immediately.'
photo: 'https://opengraph.githubassets.com/bf49798ba47e176c98a8dfc88cf924bfe12008e2ea7f29b4a0b7ee5370972412/nuxt/nuxt/releases/tag/v4.5.1'
original_url: https://github.com/nuxt/nuxt/releases/tag/v4.5.1
source_name: 'Nuxt Releases'
source_author: ''
tags: [frameworks, release, nodejs, security]
significance: 4
---

## Summary & Key Takeaways

- This is a critical security release for Nuxt v4.5.1.
- It fixes server-side RCE and unauthorized component instantiation.
- An authorization bypass in route rules and server component DoS are also addressed.
- Cross-user payload disclosure on cached pages and dev server path disclosure are patched.
- @nuxt/devtools@3.3.1 also fixes a separate critical development-only RCE.
- Users who upgraded for CVE-2026-53721 still need this release due to a regression fix.
- Purge CDN/edge caches if using `cache`, `swr`, or `isr` route rules.
- Performance improvements include replacing island teleports in a single HTML pass.

## Our Commentary

This is a big one. We've seen a lot of security patches lately, but multiple RCEs, DoS, and data leaks in one go? That's a serious wake-up call for the Nuxt ecosystem. The fact that a previous fix introduced a regression is just... _chef's kiss_ for the chaos. I'm genuinely concerned about the implications for projects that aren't on top of their updates. This isn't just a "patch and forget" situation; it demands immediate attention and cache purging.
