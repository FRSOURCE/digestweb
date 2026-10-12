---
layout: article
title: 'pnpm 12.11.0 Ships Rust Toolchain Management & AI Agent Skills'
description: "pnpm's latest release introduces built-in Rust toolchain management, a novel system for linking AI agent skills from dependencies, and a granular permissions setting for packages."
photo: 'https://opengraph.githubassets.com/7cbbe18beb47766281c75e81a962254a7e70ea3f042987eae4a3159cb5df9457/pnpm/pnpm/releases/tag/v12.11.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.11.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, ai]
significance: 3
---

## Summary & Key Takeaways

- pnpm 12.11.0 now supports installing and running Rust toolchains.
- It links AI agent skills from direct dependencies into project skill directories.
- A new `permissions` setting allows recording what each dependency may do.
- `pnpm approve` now reviews both build scripts and agent skills.
- Script output colors are preserved when streamed with `--stream`.
- Global Rust toolchain management is also supported.

## Our Commentary

Okay, this is wild. Rust toolchain management in a JavaScript package manager? And then "agent skills" and "permissions"? We're seeing package managers evolve beyond just dependency resolution. The idea of approving what a dependency "may do" feels like a necessary step in a world of increasingly complex, and potentially autonomous, tools. I'm genuinely curious how this "agent skills" concept will play out. It feels like a glimpse into a future where our dev tools are more integrated with AI agents.
