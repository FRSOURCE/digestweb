---
layout: article
title: 'pnpm 12 Released: Major Changes to Git Dependencies and Workspace Config'
description: 'pnpm 12 introduces significant changes to how Git dependencies are resolved and enforces stricter validation for `pnpm-workspace.yaml` settings.'
photo: 'https://opengraph.githubassets.com/3142518108d6c0390f0b234f6b57fb9cd74d8ab3bd136b9ea64027aaaed6ccae/pnpm/pnpm/releases/tag/v12.0.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, tooling, release, dx]
significance: 3
---

## Summary & Key Takeaways

- Git dependencies on known hosts now resolve through canonical HTTPS URLs, removing SSH from lockfiles.
- This change eliminates network probing during resolution, preventing transport mismatches across environments.
- `pnpm-workspace.yaml` no longer silently ignores unrecognized settings; it now reports them as errors or warnings.
- Unrecognized settings suggest closest real names for typos, improving configuration reliability.
- Users can configure Git's URL rewriting globally for private hosted repositories over SSH.

## Our Commentary

This pnpm 12 release tackles a real pain point with Git dependencies. We've all been there, where a lockfile generated on one machine breaks CI because of an SSH URL. Forcing canonical HTTPS and allowing global Git config for SSH is a smart, pragmatic solution. The stricter workspace config validation is also a welcome change; silent failures are the worst.
