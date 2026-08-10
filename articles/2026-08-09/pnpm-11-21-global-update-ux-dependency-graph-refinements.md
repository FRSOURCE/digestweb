---
layout: article
title: 'pnpm 11.21: Global Update UX & Dependency Graph Refinements'
description: 'This minor pnpm release enhances the global update experience with interactive selection and introduces a crucial warning for `sudo` usage with global commands. It also brings significant optimizations to dependency graph resolution.'
photo: 'https://opengraph.githubassets.com/056d635e24f4b9ca17051c4b242744e799051f457a311a4694268871374bf9d8/pnpm/pnpm/releases/tag/v11.21.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.21.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, dx, release]
significance: 2
---

## Summary & Key Takeaways

Interactive group selection is added to `pnpm update --global --interactive`.
Running global commands with `sudo` now prints a warning, will fail in v12.
Global packages and configuration are stored in the invoking user's home directory.
Fixes for pnpm failing under asynchronous Node.js module loaders.
Dependency graph re-resolution is optimized when removing or changing dependencies.
The `minimumReleaseAge` fallback for custom dist-tags is fixed.
CI regression with Git specifiers failing to install is resolved.

## Our Commentary

The `sudo` warning is a smart move. I've definitely seen people accidentally mess up their global installs by running `sudo pnpm add -g`. It's a small change, but it prevents future headaches. The dependency graph optimizations are also welcome; anything that makes installs faster and more reliable is a win in my book.
