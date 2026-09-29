---
layout: article
title: 'pnpr 0.1.0-alpha.14: Enhanced Security & Workspace Linking'
description: 'This alpha release of pnpr improves resolver security by blocking private network connections and enhances developer experience by linking workspace projects via `publishConfig.directory`.'
photo: 'https://opengraph.githubassets.com/ee8eee27c9e95aa9e739b36a4293e416ede48813036f929ce8fe460c2ccd3f41/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx, open-source]
significance: 1
---

## Summary & Key Takeaways

- The pnpr resolver now prevents connections to private network addresses, enhancing security.
- Workspace projects are now linked using their `publishConfig.directory` setting.
- Transitive git and tarball dependencies are checked against the fetch allowlist.
- Cargo dependency resolution for sparse-index registries has been made faster.

## Our Commentary

It's good to see security baked into an alpha release like this, especially for network resolvers. The `publishConfig.directory` linking is a nice touch for monorepo users. We appreciate the focus on both security and developer experience, even in these early stages.
