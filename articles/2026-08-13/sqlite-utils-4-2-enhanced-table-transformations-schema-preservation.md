---
layout: article
title: 'sqlite-utils 4.2: Enhanced Table Transformations & Schema Preservation'
description: 'This release of sqlite-utils significantly improves the `table.transform()` feature, allowing for more robust schema alterations and better preservation of constraints.'
photo: 'https://picsum.photos/id/673/800/450'
original_url: https://simonwillison.net/2026/Aug/13/sqlite-utils/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, open-source, release]
significance: 2
---

## Summary & Key Takeaways

- `table.transform()` now supports complex alter table operations.
- It preserves a wider array of schema definitions, including check and unique constraints.
- Column comments are also maintained during transformations.
- New introspection properties for check constraints have been added.
- The release includes contributions from multiple developers.

## Our Commentary

We've always appreciated the utility of `sqlite-utils` for managing SQLite databases. This update to `table.transform()` feels like a solid step forward. Preserving schema details like check constraints during transformations is a huge quality-of-life improvement. I've definitely run into situations where such details were lost, causing headaches. It's the kind of careful, incremental improvement that makes a tool truly reliable.
