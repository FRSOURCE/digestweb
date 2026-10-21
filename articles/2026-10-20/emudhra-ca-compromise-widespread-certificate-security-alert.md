---
layout: article
title: 'eMudhra CA Compromise: Widespread Certificate Security Alert'
description: 'Eight eMudhra intermediate CA certificates have been compromised, impacting trust roots across major browsers and operating systems. Immediate software updates are required.'
photo: 'https://picsum.photos/id/684/800/450'
original_url: https://simonwillison.net/2026/Oct/20/emudhra-certificates/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [security, browser, web-platform, tooling]
significance: 4
---

## Summary & Key Takeaways

- Private keys for eight eMudhra intermediate CA certificates are compromised.
- These certificates chain to roots trusted by Mozilla, Microsoft, Apple, and Chrome.
- The compromise affects many downstream trust stores and requires immediate action.
- Any software bundling trusted certificates needs to be updated promptly.
- Linux distributions must update their `ca-certificates` packages.
- Python tools like `uv` (0.13.4), `pip` (26.2.2), and `certifi` (2026.10.19) have already released updates.

## Our Commentary

This is genuinely unsettling. A CA compromise is one of those things that makes you question the very foundations of web security. We're talking about trust roots here, the bedrock. I'm thinking about the sheer scale of updates needed, the potential for unnoticed vulnerabilities. It's a stark reminder that the web's security model, while robust, is only as strong as its weakest link. This isn't just a "patch your server" moment; it's a "check everything" moment.
