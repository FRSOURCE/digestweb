---
layout: article
title: 'pnpm 11.19: Login Improvements & Git-Hosted Package Builds'
description: 'This minor pnpm release enhances login for non-interactive terminals and improves build approvals for git-hosted packages, alongside various bug fixes.'
photo: 'https://opengraph.githubassets.com/9950921a3bee3b50e1142d22cbbfb0fa2d6977394c7fcbc039260fe4113efd81/pnpm/pnpm/releases/tag/v11.19.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.19.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx]
significance: 1
---

## Summary & Key Takeaways

- `pnpm login` now supports web-based login without an interactive terminal, printing the URL and polling for approval.
- The `save-prefix` setting now explicitly accepts `=` for exact version pinning.
- `allowBuilds` entries can now approve git-hosted packages by repository URL, simplifying updates.
- Several bug fixes address issues like non-deterministic lockfile changes and interactive git credential prompts.

## Our Commentary

Minor releases like this often contain the most impactful quality-of-life improvements. We appreciate the continued focus on developer experience, especially for CI/CD environments where non-interactive logins and consistent dependency pinning are crucial. It's the little things that smooth out the rough edges of daily development.
