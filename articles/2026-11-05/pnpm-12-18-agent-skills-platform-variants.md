---
layout: article
title: 'pnpm 12.18: Agent Skills & Platform Variants for Packages'
description: 'This release introduces agent skill management, allowing granular control over AI agent capabilities, alongside new platform variant support for package publishing.'
photo: 'https://opengraph.githubassets.com/9871622e574618a83b87271d2e643723a2d4e6f3032421046d60dfb63f0e8c1f/pnpm/pnpm/releases/tag/v12.18.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.18.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, ai, dx]
significance: 2
---

## Summary & Key Takeaways

- Introduces agent skill management for packages, allowing per-skill approval and linking.
- Skills are now linked by name alone, with conflict resolution for duplicate names.
- `pnpm approve` now prompts for specific skills and agent directories to link.
- Supports nested agent skills up to three levels deep.
- Adds platform variant support for `pnpm pack` and `pnpm publish` for pnpr registries.
- `pnpm pack --json` now prints integrity and size for all archives.
- Optimizes repeat installs and `verifyDepsBeforeRun` by avoiding unnecessary `package.json` reads.

## Our Commentary

This is a fascinating direction for a package manager. The integration of "agent skills" feels like a glimpse into a future where our build tools are deeply intertwined with AI agents. I'm genuinely curious how this will play out. The platform variants are a solid DX win too.
