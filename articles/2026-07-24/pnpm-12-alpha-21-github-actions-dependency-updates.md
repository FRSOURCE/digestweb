---
layout: article
title: 'pnpm 12 Alpha 21: GitHub Actions & Dependency Update Enhancements'
description: 'This alpha release of pnpm 12 brings improved GitHub Actions integration, ensuring global commands work seamlessly. It also refines `pnpm update --latest` to better handle non-registry dependencies.'
photo: 'https://opengraph.githubassets.com/3986a8896131f86fc86dc1e26013b5c0cd99e01680d89f154e4be777070ca0ec/pnpm/pnpm/releases/tag/v12.0.0-alpha.21'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.21
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx]
significance: 1
---

## Summary & Key Takeaways

- pnpm setup now appends `PNPM_HOME` and global bin directory to GitHub Actions environment files.
- GitHub Actions dependency checking is now opt-in for `pnpm outdated` and `pnpm update`.
- `pnpm update --latest` no longer overwrites non-registry dependencies with unrelated package versions.
- `pnpm update --latest` avoids rewriting `package.json` if dependencies are already at their latest.

## Our Commentary

We appreciate the continued focus on developer experience, especially with CI/CD. Making GitHub Actions dependency checks opt-in is a smart move; those `git ls-remote` calls can be a real pain in restricted environments. And fixing `pnpm update --latest` to respect non-registry dependencies? That's just good hygiene.
