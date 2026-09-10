---
layout: article
title: 'pnpr Alpha Expands to Multi-Ecosystem Registry and OIDC Support'
description: "pnpr's latest alpha release, 0.1.0-alpha.11, dramatically expands its capabilities by supporting Cargo, Python, and OCI registries alongside npm, with OIDC integration."
photo: 'https://opengraph.githubassets.com/32d29e0d2adc373f81ecd62cd6802a0b67cf53c7681bb058ab0ae50c4a6d7302/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.11'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.11
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx, open-source]
significance: 3
---

## Summary & Key Takeaways

- pnpr now serves Cargo, Python, and container registries in addition to npm.
- It enables publishing across all supported ecosystems in a single transaction.
- User authentication is now integrated via OIDC.
- Hosted Cargo registries support `cargo publish`, `cargo yank`, and crate downloads.
- Hosted Python registries support `pip install --index-url` and `twine upload`.
- `pnpm install` can now resolve Cargo and Python dependencies through the pnpr server.
- Container images are now served, supporting Docker, Podman, or Skopeo pushes.

## Our Commentary

Okay, this is a huge leap for `pnpr`. We're talking about a single registry serving npm, Cargo, Python, _and_ OCI? That's ambitious. The idea of publishing across all of them in one go is genuinely compelling. I'm curious to see how this evolves. It could simplify a lot of polyglot development workflows.
