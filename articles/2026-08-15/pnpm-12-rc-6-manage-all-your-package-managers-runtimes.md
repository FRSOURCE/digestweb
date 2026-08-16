---
layout: article
title: 'pnpm 12 RC 6: Manage All Your Package Managers & Runtimes'
description: 'This release candidate for pnpm 12 introduces groundbreaking features, allowing it to install and run npm, Yarn, and Bun, alongside Node.js and Deno.'
photo: 'https://opengraph.githubassets.com/22171531daa7163c40601bb3c9d60c1e0b03eafdfc2e56182b4382104f520903/pnpm/pnpm/releases/tag/v12.0.0-rc.6'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.6
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, bun, release]
significance: 3
---

## Summary & Key Takeaways

- `pnpm cache path` now prints the metadata cache directory, useful for CI caching.
- pnpm can now install and manage other package managers like npm, Yarn, and Bun.
- It respects `packageManager` pins in `package.json` for git-hosted dependencies.
- `pnpm dlx` (pnx) can now run specific versions of package managers or runtimes directly.
- `pnx yarn@4 install` will now correctly provision Yarn 4, not an npm package.
- The `--package` flag allows specifying which package manager's command to run.
- `pnpm shim add yarn` links a `yarn` command to the project's pinned version.

## Our Commentary

Okay, this is a genuinely wild move from pnpm. I mean, `pnpm dlx bun@1.3.0 install`? That's just... _chef's kiss_. We've been juggling so many package managers and runtime versions, and the idea of pnpm becoming this universal orchestrator is both terrifying and incredibly appealing. I'm not sure if it's a power grab or a genuine attempt at simplifying the dev experience, but I'm here for the chaos. The implications for CI/CD are huge, too. No more `nvm use` then `npm install` then `yarn install` then `bun install`? Just `pnpm dlx` everything? My brain is buzzing with the possibilities.
