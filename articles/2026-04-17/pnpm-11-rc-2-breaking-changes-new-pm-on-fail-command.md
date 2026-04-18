---
layout: article
title: 'pnpm 11 RC 2: Breaking Changes, New `pmOnFail` & `pnpm with` Command'
description: 'pnpm 11 Release Candidate 2 introduces significant breaking changes, consolidating package manager version settings into a new `pmOnFail` option. It also adds a powerful `pnpm with` command for running specific pnpm versions.'
photo: 'https://opengraph.githubassets.com/d560c3745cb5776c84d4487803952235a5c7d69a7a72f3073854d0432eda9a05/pnpm/pnpm/releases/tag/v11.0.0-rc.2'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.2
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, build-tools]
significance: 3
---

## Summary & Key Takeaways

- pnpm 11 RC 2 introduces breaking changes by removing `managePackageManagerVersions`, `packageManagerStrict`, and `packageManagerStrictVersion` settings.
- These settings are replaced by a new `pmOnFail` setting, which directly controls the failure behavior for `packageManager` and `devEngines.packageManager`.
- The `COREPACK_ENABLE_STRICT` environment variable is no longer honored; users should migrate to `pmOnFail`.
- `pnpm dlx` and `pnpm create` now respect project-level security and trust policy settings.
- New native commands like `star`, `unstar`, `stars`, and `whoami` have been implemented.
- A new `pnpm with <version|current> <args...>` command allows running pnpm at a specific version for a single invocation, bypassing project pins.
- The `pmOnFail` setting can be configured via CLI, environment variables, `pnpm-workspace.yaml`, or `.npmrc`.

## Our Commentary

This RC for pnpm 11 brings some substantial changes, particularly the consolidation of package manager versioning logic into `pmOnFail`. While breaking changes are always a bit of a headache, simplifying these settings into one clear option seems like a good move for long-term maintainability and clarity. The `pnpm with` command is a fantastic addition for testing or running scripts with specific pnpm versions without altering the project's pinned version. This is a huge win for DX, especially in monorepos or when dealing with legacy projects. We're excited to see the final release.
