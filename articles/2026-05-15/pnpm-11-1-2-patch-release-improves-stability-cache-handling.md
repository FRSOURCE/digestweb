---
layout: article
title: 'pnpm 11.1.2 Patch Release Improves Stability and Cache Handling'
description: 'pnpm 11.1.2 addresses several critical issues, including stripping `sec-fetch-*` headers to prevent HTTP 400 errors with Azure DevOps, improving `minimumReleaseAge` handling for cached metadata, and fixing interactive upgrade and lockfile resolution problems.'
photo: 'https://opengraph.githubassets.com/5c96eab2c88715133aeb854bdcc865917c4255385d915174420dcb37af5bd17b/pnpm/pnpm/releases/tag/v11.1.2'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.1.2
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.1.2 is a patch release focusing on stability and bug fixes.
- It strips `sec-fetch-*` headers from outgoing HTTP requests to prevent HTTP 400 errors with Azure DevOps Artifacts.
- The release improves `minimumReleaseAge` handling for cached abbreviated metadata, ensuring correct re-fetching when necessary.
- It fixes an issue where `pnpm upgrade --interactive --latest -r` did not respect named catalog groups.
- Optimistic repeat install now correctly handles `pnpm-lock.yaml` merge conflict resolution.
- The update also addresses issues with `minimumReleaseAge` / `resolutionMode: time-based` installs failing on lockfiles whose `time` block is missing entries.

## Our Commentary

While a patch release, pnpm 11.1.2 brings some genuinely important fixes that will improve the daily lives of many developers. The `sec-fetch-*` header issue with Azure DevOps is a specific but impactful fix for enterprise users. More broadly, the improvements to cache handling and `minimumReleaseAge` are crucial for reliable and consistent dependency management, especially in CI/CD environments. It's these kinds of detailed, robust fixes that make a package manager truly dependable. We appreciate the continuous effort to iron out these edge cases.
