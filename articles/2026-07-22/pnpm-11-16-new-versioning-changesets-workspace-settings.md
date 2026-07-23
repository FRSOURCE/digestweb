---
layout: article
title: 'pnpm 11.16: New Versioning, Changesets & Workspace Settings'
description: 'This minor release introduces a new verbatim versioning approach, a `--changeset` flag for automated updates, and enhanced configuration options for workspaces.'
photo: 'https://opengraph.githubassets.com/2d3f48836791702005bd8eb04cfb45cb178282856893695f7843c814b99b5f95/pnpm/pnpm/releases/tag/v11.16.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.16.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Packages now publish their manifest version verbatim on first release.
- A `--changeset` flag automates patch/major bumps for updated workspace packages.
- GitHub Actions dependencies are now supported in `pnpm outdated` and interactive `pnpm update`.
- New `update` and `audit` settings sections are added to `pnpm-workspace.yaml`.

## Our Commentary

It's interesting to see these features land in a stable 11.x release while also being part of the 12 alpha. This suggests a rapid iteration cycle. The `--changeset` flag is a standout feature, making dependency management in monorepos much smoother. I appreciate the continued focus on improving the developer experience for complex setups.
