---
layout: article
title: 'pnpm 11.7 Introduces `frozenStore` for Read-Only Filesystems'
description: 'pnpm 11.7 ships with a new `frozenStore` setting, enabling installations against read-only package stores, crucial for environments like Nix or OCI layers. It also improves bin-linking tolerance and delegates dependency resolution to `pacquet` when configured.'
photo: 'https://opengraph.githubassets.com/6f799b0314cb85d696c8f38529972c3eca71d41714a7084e962af24adf337a9c/pnpm/pnpm/releases/tag/v11.7.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.7.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release]
significance: 2
---

## Summary & Key Takeaways

- The `frozenStore` setting allows pnpm to install packages from a read-only store, bypassing write operations.
- This feature is particularly useful for environments with immutable filesystems, such as Nix or OCI layers.
- It requires Node.js versions >=22.15.0, >=23.11.0, or >=24.0.0.
- Bin-linking now tolerates read-only stores by skipping redundant chmod operations.
- pnpm can delegate dependency resolution to `pacquet`, its Rust port, when configured.
- The feature fails fast if the store is incomplete or if incompatible options like `--force` are used.

## Our Commentary

This `frozenStore` feature is a big deal for anyone working with immutable infrastructure or containerized builds. We've seen so many headaches trying to get package managers to play nice with read-only layers. The explicit support for Nix-like environments is a smart move. It feels like pnpm is really doubling down on robustness for complex build pipelines. I'm curious how widely this will be adopted, but it definitely solves a pain point.
