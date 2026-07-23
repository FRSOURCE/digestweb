---
layout: article
title: 'PyPI Enhances Supply Chain Security: No More Uploads to Old Releases'
description: 'PyPI now rejects new file uploads to releases older than 14 days. This measure prevents poisoning of stable releases if publishing tokens are compromised.'
photo: 'https://picsum.photos/id/44/800/450'
original_url: https://simonwillison.net/2026/Jul/23/seth-larson/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, security, open-source]
significance: 2
---

## Summary & Key Takeaways

- PyPI now prevents new files from being uploaded to releases older than 14 days.
- This restriction aims to protect stable releases from potential compromise.
- The measure addresses a vulnerability where publishing tokens could be abused.
- While not yet exploited, the technical possibility existed.

## Our Commentary

This is a smart move by PyPI. We've seen too many supply chain attacks lately, and locking down old releases feels like a no-brainer. It's a proactive step, which I appreciate. It makes me wonder what other package managers are doing to prevent similar issues. The idea of an attacker poisoning a long-stable dependency is just... unsettling.
