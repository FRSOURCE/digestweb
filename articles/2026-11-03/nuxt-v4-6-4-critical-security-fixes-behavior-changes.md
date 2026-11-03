---
layout: article
title: 'Nuxt v4.6.4: Critical Security Fixes & Key Behavior Changes'
description: "Nuxt's latest release addresses multiple security vulnerabilities in both Nuxt and Nitro, alongside significant adjustments to error handling, dev server behavior, and caching. Developers should upgrade promptly."
photo: 'https://opengraph.githubassets.com/4a74ff64aeb4f7770c003acdaa3fa3c0411371fb6f7725f8ec80d541a760e6dd/nuxt/nuxt/releases/tag/v4.6.4'
original_url: https://github.com/nuxt/nuxt/releases/tag/v4.6.4
source_name: 'Nuxt Releases'
source_author: ''
tags: [frameworks, release, security, dx]
significance: 2
---

## Summary & Key Takeaways

- Nuxt v4.6.4 is a security release addressing eight advisories in Nuxt and three in Nitro.
- Error details in production are now stripped, only showing `createError` messages.
- Dev server host checks are stricter, requiring `devServer.allowedHosts` for custom hostnames.
- `workspaceDir` detection is more precise, limiting scope to explicit roots or git repos.
- Nitropack's `cache`, `swr`, and `isr` rules now only cache GET/HEAD requests and avoid responses with cookies or `Cache-Control: private/no-store`.
- Route rules now correctly match paths containing encoded slashes.

## Our Commentary

A security release is always a good thing, but the behavior changes here are quite substantial. Stripping error details in production is a smart move for security, but I can see it catching some developers off guard. The stricter dev server host checks are also a welcome security hardening. We're seeing a trend towards more secure defaults, which is great, but it means we need to pay closer attention to release notes.
