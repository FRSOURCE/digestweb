---
layout: article
title: 'pnpm 11.23 Improves Config Visibility, Deprecates `importPackage` Hook'
description: 'The latest pnpm release enhances how configuration settings are displayed and deprecates the `importPackage` pnpmfile hook, signaling its removal in the next major version.'
photo: 'https://opengraph.githubassets.com/e92e6c158a1fd533aefffc9ce2ad48dde8ef2fb9aa3fabce31f369fd496b0b26/pnpm/pnpm/releases/tag/v11.23.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.23.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release]
significance: 1
---

## Summary & Key Takeaways

- `pnpm config get` and `pnpm config list` now show settings under their documented names.
- Registries, update/audit sections, and catalogs are displayed more accurately.
- Unrecognized configuration keys now provide more helpful warnings.
- The `importPackage` pnpmfile hook is deprecated and will be removed in the next major version.

## Our Commentary

This is a solid quality-of-life update for pnpm users. I appreciate the improved clarity around config settings; it's always a pain when a tool's internal config doesn't match what you expect. Deprecating `importPackage` is a clear signal for future major versions, which is good for planning.
