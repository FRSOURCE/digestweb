---
layout: article
title: 'pnpm 11.26: Workspace Protocol & Lockfile Trust Policies'
description: 'This minor pnpm release introduces workspace dependency resolution via `workspace:` protocol and new `trust-lockfile` options for `remove` and `update`.'
photo: 'https://opengraph.githubassets.com/08f0cd256ec1d2fe383df1af2900efef09be6480747c8b363ba7686cfcb8a653/pnpm/pnpm/releases/tag/v11.26.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.26.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Catalogs now resolve workspace dependencies using the `workspace:` protocol.
- `pnpm remove` and `pnpm update` gain new `--trust-lockfile` and `--trust-policy` options.
- A new `pnpm change check` command validates package versions against workspace policies.
- Fetch and tarball error logs now hide sensitive URL credentials.
- Fixed a race condition during config dependency updates that could redirect lockfile writes.
- `pnpm audit --fix` now correctly respects `saveExact` and `savePrefix` for overrides.
- `pnpm audit` now reports ignored advisories separately from vulnerability totals.
- Concurrent installs sharing a store no longer fail with `ENOENT` errors.

## Our Commentary

We're always happy to see continuous improvements in our build tools. The `workspace:` protocol resolution is a nice touch for monorepo users. I'm particularly interested in the new `trust-lockfile` options; managing lockfile integrity can be a headache, so any tools to streamline that are welcome. The `pnpm change check` for CI validation also feels like a solid win for team workflows. Small releases like this often contain the most impactful DX improvements.
