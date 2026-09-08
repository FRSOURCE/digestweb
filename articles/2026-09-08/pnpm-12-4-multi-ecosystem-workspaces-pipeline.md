---
layout: article
title: 'pnpm 12.4 Introduces Multi-Ecosystem Workspaces & Pipeline Command'
description: 'pnpm 12.4 significantly enhances monorepo management by allowing npm, Python, and Cargo dependencies in the same workspace, alongside a new `pnpm pipeline` command for task orchestration.'
photo: 'https://opengraph.githubassets.com/087499c6d58c7c72b6ae74bf1eda095d6e1aa80587c8bcd11482ef895bf2ee06/pnpm/pnpm/releases/tag/v12.4.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.4.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, build-tools, release]
significance: 3
---

## Summary & Key Takeaways

- pnpm can now manage npm, Python, and Cargo dependencies within a single workspace.
- Enable Python or Cargo support via `pnpm-workspace.yaml` and use `pnpm add pypi:<package>` or `pnpm add crate:<package>`.
- A new `pnpm pipeline [name]` command orchestrates workspace tasks with inputs, outputs, and caching.
- `pnpm pipeline` supports selecting affected projects and running task graphs.
- Expanded platform support includes Android (arm64, x64), FreeBSD (x64), and Linux (ppc64le, s390x, RISC-V).
- `trustPolicyExcludePrune` automatically removes unused packages from `trustPolicyExclude`.

## Our Commentary

This is a massive release for pnpm. The ability to manage multiple language ecosystems in one workspace is a game-changer for polyglot monorepos. I've been waiting for a package manager to truly embrace this. The `pnpm pipeline` command also looks incredibly powerful for task orchestration. This release solidifies pnpm's position as a top-tier build tool.
