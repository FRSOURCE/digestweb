---
layout: article
title: 'Cloudflare WAF: Smarter CAPTCHA for Search URLs'
description: 'Learn a specific Cloudflare WAF rule to only trigger CAPTCHA for search URLs containing an ampersand, improving user experience for simple queries.'
photo: 'https://picsum.photos/id/780/800/450'
original_url: https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, ai]
significance: 1
---

## Summary & Key Takeaways

- Discovers a specific Cloudflare WAF rule for CAPTCHA management.
- The rule targets search URLs containing at least one ampersand.
- Allows simple `?q=term` searches to bypass the CAPTCHA.
- Improves user experience by reducing unnecessary challenges.
- Mentions attempting to use Claude Code for rule editing, but it required switching to the Cloudflare API.

## Our Commentary

This is a super niche tip, but I've definitely run into similar Cloudflare WAF frustrations. It's a good example of how small tweaks can significantly improve DX. The mention of Claude Code's limitations is also interesting; it reminds us that AI tools aren't magic bullets for every task, especially when dealing with proprietary APIs.
