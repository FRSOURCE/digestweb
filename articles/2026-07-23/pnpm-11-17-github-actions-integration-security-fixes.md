---
layout: article
title: 'pnpm 11.17: GitHub Actions Integration & Security Fixes'
description: 'pnpm 11.17 introduces new settings for GitHub Actions integration, improves handling of private repositories, and includes crucial security and bug fixes.'
photo: 'https://opengraph.githubassets.com/ef4485d88a98e6f12bd5d3640bd9fc080e79e63d40cf05384449775e820131bc/pnpm/pnpm/releases/tag/v11.17.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.17.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx, open-source]
significance: 2
---

## Summary & Key Takeaways

- A new `update.githubActionsServer` setting allows specifying a custom GitHub server URL for actions.
- `pnpm outdated` and `pnpm update` now gracefully skip unreadable GitHub Action repositories with a warning.
- A security fix prevents memory exhaustion during web-based authentication token polling.
- Critical bug fixes address issues with `catalog:` references and a packing bug that affected previous releases.
- Web-based login now displays the URL with a warning if a QR code cannot be rendered.

## Our Commentary

This pnpm 11.17 release feels like a solid maintenance update. The GitHub Actions integration improvements are a nice touch for enterprise users or those with complex CI setups. But honestly, the most important thing here is that packing bug fix. Missing compiled files in tarballs? That's a nightmare scenario. We're glad they caught and fixed it. It's a good reminder that even mature tools can have these kinds of issues, and vigilance is key.
