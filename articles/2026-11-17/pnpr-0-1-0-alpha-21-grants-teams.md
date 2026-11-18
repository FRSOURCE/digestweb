---
layout: article
title: 'pnpr 0.1.0-alpha.21: Database Grants & Instance-Wide Teams'
description: 'pnpr 0.1.0-alpha.21 introduces database-stored grants for access control and makes teams instance-wide, requiring a database reset for existing deployments.'
photo: 'https://opengraph.githubassets.com/cc1ab93b9a0f0a2e7a9ef70f4a4734d025eb425168b36ad22776cf91f0f7f488/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.21'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.21
source_name: 'pnpm Releases'
source_author: ''
tags: [pnpm, tooling, release, open-source]
significance: 1
---

## Summary & Key Takeaways

- pnpr 0.1.0-alpha.21 introduces a new grants system for access control, stored in the database.
- Grants define actions (read, cache, publish, annotate, delete, manage) for accounts, teams, or groups.
- Teams are now instance-wide, rather than tied to a single registry.
- Existing alpha deployments require a database reset due to schema changes.
- New `pnpr grants export` and `pnpr grants import` commands manage grants via YAML files.
- Access keys and publish/unpublish lists in registry configurations are removed.
- The tool now serves upstream versions after caching the package's packument.

## Our Commentary

This `pnpr` alpha release is making some pretty fundamental changes to how access and teams are managed. Requiring a database reset for an alpha isn't ideal, but it signals a significant architectural shift. The move to instance-wide teams and granular grants feels like a step towards a more robust, enterprise-ready package registry. It's a niche tool, but these are important developments for its users.
