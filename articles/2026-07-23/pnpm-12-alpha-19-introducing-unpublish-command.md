---
layout: article
title: "pnpm 12 Alpha 19: Introducing 'unpublish' Command"
description: 'pnpm 12 Alpha 19 brings the new `pnpm unpublish` command for removing packages from registries, alongside improvements for GitHub Actions and `install --no-runtime`.'
photo: 'https://opengraph.githubassets.com/c97b855aa3f2d03695a931cc97ce2d6e2ae76a20bb4773e4a3d3b7b3c05b65ab/pnpm/pnpm/releases/tag/untagged-e518c274b13ed6243f61'
original_url: https://github.com/pnpm/pnpm/releases/tag/untagged-e518c274b13ed6243f61
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- The new `pnpm unpublish` command allows removing packages or specific versions from the registry.
- GitHub Actions integration now includes a new `update.githubActionsServer` setting and improved error handling.
- `pnpm install --no-runtime` can now be used without `--frozen-lockfile` for fresh installs.
- `pnpm outdated` table borders are now correctly aligned when output is colorized.
- `pnpm pack` and `pnpm publish` no longer let workspace-root `.gitignore` rules override package manifest allowlists.

## Our Commentary

Okay, `pnpm unpublish` is a big one. It's a powerful command, and I'm glad to see it added, though it definitely needs to be used with extreme caution. The ability to `install --no-runtime` without `--frozen-lockfile` is also a subtle but useful improvement for specific CI/CD scenarios. It's these kinds of granular controls that make pnpm so flexible. We're seeing a lot of good stuff coming out of the pnpm camp lately, even in alpha.
