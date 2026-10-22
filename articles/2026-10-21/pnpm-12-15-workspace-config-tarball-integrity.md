---
layout: article
title: 'pnpm 12.15: Enhanced Workspace Config & Tarball Integrity'
description: 'This pnpm release introduces flexible workspace configuration delegation, tarball integrity pinning, and zstd compression support, alongside performance boosts.'
photo: 'https://opengraph.githubassets.com/c9364b031ba235deed9ee3fd7498dbf6a0d0fa3156168358f6f386f4a29cd795/pnpm/pnpm/releases/tag/v12.15.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.15.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, tooling, release, performance]
significance: 2
---

## Summary & Key Takeaways

- `pnpm-workspace.yaml` can now delegate settings to other YAML files or config dependencies via a new `include` field.
- `lockfile.integrityTarget: tar` pins the hash of uncompressed tarballs, preventing lockfile changes from registry recompression.
- pnpm now supports installing from registries serving zstd or gzip compressed uncompressed tars.
- The `maxTarballUnpackedSize` setting caps the unpacked size of a single package.
- Workspace installs and macOS file linking have received speed improvements.

## Our Commentary

We appreciate the continued focus on robustness and performance in pnpm. The `integrityTarget: tar` feature is a smart move for stability, especially with registries changing compression. Splitting workspace settings also feels like a win for larger projects. I'm always a fan of anything that makes package management more predictable.
