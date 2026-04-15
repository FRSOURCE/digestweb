---
layout: article
title: 'Modern CSRF Protection: Sec-Fetch-Site Header in Datasette'
description: 'Explore how Datasette is shifting from traditional CSRF tokens to leveraging the `Sec-Fetch-Site` header for enhanced web security and simplified implementation. This article delves into the benefits and considerations of this modern approach.'
photo: 'https://picsum.photos/id/392/800/450'
original_url: https://simonwillison.net/2026/Apr/14/replace-token-based-csrf/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [web-platform, security, dx, tutorial]
significance: 2
---

## Summary & Key Takeaways

- The article details Datasette's transition from token-based CSRF protection to using the `Sec-Fetch-Site` HTTP header.
- `Sec-Fetch-Site` is a browser-provided header that indicates the relationship between the request initiator and the target site.
- This approach simplifies CSRF protection by removing the need for server-side state or client-side token management.
- It offers advantages for Single Page Applications (SPAs) and API-driven architectures.
- The author discusses the security implications, noting that while effective for same-site requests, it's not a universal replacement for all CSRF scenarios.
- Browser support for `Sec-Fetch-Site` is widespread, making it a viable modern security primitive.

## Our Commentary

This is a fascinating deep dive into a more modern, browser-native approach to CSRF protection. We've all wrestled with CSRF tokens, and the idea of offloading some of that complexity to the browser's built-in security mechanisms is genuinely appealing. It feels like a step towards simpler, more robust web applications. I appreciate Simon's detailed breakdown of the pros and cons, especially highlighting that it's not a silver bullet for _all_ cross-site request forgery. It's a good reminder that web security is nuanced, but also that the platform is evolving to provide better primitives. This could definitely influence how we think about security in our own projects.
