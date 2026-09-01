---
layout: article
title: 'pnpm 12.2 Boosts Workspace Performance, Fixes Audit & Deploy Issues'
description: 'pnpm 12.2 introduces faster installs for large workspaces and resolves several bugs related to `audit --fix` and `pnpm deploy`. Workspace dependencies can now be resolved via the `workspace:` protocol in catalogs.'
photo: 'https://opengraph.githubassets.com/6bdb13b77926cbfad1f0391ae03d87adefdb66acf71ec223e84cb9299fad6ce7/pnpm/pnpm/releases/tag/v12.2.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.2.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, build-tools, release, performance]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.2 allows catalogs to resolve workspace dependencies using the `workspace:` protocol.
- Installs in large workspaces are now significantly faster due to optimized dependency resolution.
- Fixes were implemented for `pnpm audit --fix` when used without a value or with other flags.
- The `pnpm audit --fix=override` command now respects `saveExact` and `savePrefix` settings.
- Node.js runtime downloads are now authenticated with URL-scoped npm registry credentials.
- Detached child processes on Windows are no longer terminated after successful commands.
- `pnpm deploy` no longer strictly requires `injectWorkspacePackages` to be enabled.
- Improved error messaging for ambiguous peer dependency bindings during deployment.

## Our Commentary

We're always happy to see performance improvements, especially for large workspaces. That's a real pain point for many teams. The `pnpm deploy` changes also seem to address some tricky edge cases, which is good. It's these kinds of iterative refinements that make developer tools so much more robust over time.
