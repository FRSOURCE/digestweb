---
layout: article
title: 'npm & pnpm Introduce Staged Publishing for Enhanced Package Security'
description: 'npm and pnpm now support staged publishing, adding a review and approval process before packages go live, significantly enhancing registry security.'
photo: 'https://picsum.photos/id/822/800/450'
original_url: https://javascriptweekly.com/issues/787
source_name: 'JavaScript Weekly'
source_author: ''
tags: [nodejs, tooling, release, javascript]
significance: 3
---

## Summary & Key Takeaways

- npm 11.15.0 and pnpm 11.3 now support staged publishing.
- This feature introduces a mandatory review period for packages.
- Approval is required before packages are made public on the registry.
- Aims to enhance the security and trustworthiness of the npm ecosystem.
- GitHub also introduced `--allow-*` options for package sourcing control.

## Our Commentary

Staged publishing for npm and pnpm is a _huge_ deal for supply chain security. We've seen too many incidents with malicious packages. Adding a review and approval step before a package hits the registry feels like a necessary evolution. It's a bit of friction, sure, but the peace of mind it offers is invaluable. This is a welcome change.
