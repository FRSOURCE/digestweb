---
layout: article
title: 'pnpr 0.1.0-alpha.18: SQL Metadata & Transparency Logs'
description: 'This alpha release of pnpr overhauls metadata storage to SQL databases, introduces transparency logs for releases, and supports platform variants for packages.'
photo: 'https://opengraph.githubassets.com/bb13c801c9cfdd58dc208acfd65029eadea507f6e54696bcb55f755bcde766d5/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.18'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.18
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, open-source, dx]
significance: 2
---

## Summary & Key Takeaways

- Overhauls metadata storage to use SQLite or shared libSQL databases, removing the documents backend.
- Requires republishing packages for stores that previously used the documents backend.
- Introduces transparency logs for release records, tracking who moved dist-tags and when.
- Supports publishing and accepting packages with platform variants.
- Refuses changes to published npm version manifests and never accepts unpublished versions again.
- Adds `pnpr-generation` header to hosted npm package responses for atomic publishes.
- Records each publish as a publication, accessible via a dedicated endpoint.

## Our Commentary

Moving a package registry's metadata to SQL is a pretty big architectural shift, even for an alpha. The transparency logs are a smart move for security and accountability. I'm always a little wary of alpha releases that break compatibility, but the benefits here seem to outweigh the initial friction. This feels like a solid foundation for future registry features.
