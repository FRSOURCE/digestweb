---
layout: article
title: 'pnpm 11.27: Enhanced Configuration & Security for Package Management'
description: 'This minor pnpm release brings new global configuration options for Node.js download mirrors and a `trustPolicyExcludePrune` setting for better security, alongside various bug fixes.'
photo: 'https://opengraph.githubassets.com/cc4069a78c778c11883dc495b2a10e36a48e9e407f14ce2f770b99f445255d65/pnpm/pnpm/releases/tag/v11.27.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.27.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, dx, release]
significance: 2
---

## Summary & Key Takeaways

- `nodeDownloadMirrors` can now be configured globally via `config.yaml` or environment variables.
- A new `trustPolicyExcludePrune` setting helps clean up stale entries in `pnpm-workspace.yaml`.
- pnpm now correctly reads `packageManager` pins from the workspace root's `package.json` when `lockfileDir` is set.
- Global `add`, `update`, and `remove` commands are more robust against malformed package manifests.
- The `fetch-timeout` now limits progress-free request time, not total download time, improving large file downloads.
- `pnpm peers check` no longer incorrectly flags `workspace:` peer dependencies as unmet.

## Our Commentary

We appreciate the continued focus on developer experience and security in pnpm. The global `nodeDownloadMirrors` is a small but mighty win for teams managing diverse environments. I'm particularly interested in the `trustPolicyExcludePrune` feature; it feels like a proactive step towards tidier, more secure dependency graphs. It's these kinds of thoughtful improvements that make a real difference in daily workflows.
