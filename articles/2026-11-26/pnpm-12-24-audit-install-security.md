---
layout: article
title: 'pnpm 12.24 Enhances Audit, Install Feedback, and Security'
description: "pnpm's latest release introduces new audit commands for deprecations and engine compatibility, improves install warnings, and includes a security fix."
photo: 'https://opengraph.githubassets.com/6a509ed4420548f670c9b0361c5c155134c605e5c995940cbe8e37a26cecddd8/pnpm/pnpm/releases/tag/v12.24.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.24.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, dx, release]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.24 introduces new audit commands.
- `pnpm audit deprecations` lists deprecated packages and their sources.
- `pnpm audit engines` identifies packages incompatible with the current Node.js/platform.
- Install warnings are now consolidated into a "checks footer" for better readability.
- A security fix ensures pnpm reads package tarballs like npm or refuses them.
- `pnpm approve <pkg>` no longer grants excessive permissions by default.
- The install footer provides live updates on deprecated packages, peer issues, and engine incompatibilities.

## Our Commentary

This is a really solid update for pnpm. The new audit commands are a huge win for developer experience and project health. Consolidating install warnings into a clear footer is also a smart move; it makes the output much less noisy. And a security fix is always welcome. We appreciate the continuous focus on both usability and safety.
