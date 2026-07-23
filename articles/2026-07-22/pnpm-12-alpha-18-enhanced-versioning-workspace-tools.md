---
layout: article
title: 'pnpm 12 Alpha 18: Enhanced Versioning & Workspace Tools'
description: "This alpha release brings major updates to pnpm's versioning logic, introduces npm-style bump forms, and significantly improves recursive workspace support."
photo: 'https://opengraph.githubassets.com/6a2e938a804a98de6b361d14678e50a0adaca8b12e3739fd6c3ad7a83c7f3a55/pnpm/pnpm/releases/tag/v12.0.0-alpha.18'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.18
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, dx]
significance: 3
---

## Summary & Key Takeaways

- First package releases now publish the manifest version verbatim, not bumped.
- `pnpm version` now supports npm-style bump forms and lifecycle scripts.
- Recursive workspace support is added to `pnpm outdated`, `list`, `ll`, `rebuild`, `why`, and `peers`.
- A new `--changeset` flag automates patch/major bumps for updated workspace packages.
- Changesets are generated for dependency, optionalDependency, and peerDependency changes.

## Our Commentary

I'm genuinely impressed by the continued evolution of pnpm. The new versioning logic and the `--changeset` flag feel like a huge win for monorepo maintainers. Automating those patch/major bumps based on dependency changes? That's just smart. We've all been there, manually figuring out what needs a bump. This is a solid DX improvement.
