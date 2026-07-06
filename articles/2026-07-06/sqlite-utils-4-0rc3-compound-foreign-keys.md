---
layout: article
title: 'sqlite-utils 4.0rc3: Compound Foreign Keys & Breaking Changes'
description: 'Simon Willison announces the latest release candidate for sqlite-utils 4.0, featuring compound foreign key support and adjustments for case-insensitive column names.'
photo: 'https://picsum.photos/id/731/800/450'
original_url: https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, release, dx, ai]
significance: 3
---

## Summary & Key Takeaways

- This is release candidate 3 for `sqlite-utils` version 4.0.
- The primary new feature is support for introspecting and creating compound foreign keys.
- This feature introduces a subtle breaking change to `table.foreign_keys`.
- `sqlite-utils` now aligns with SQLite's convention for case-insensitive column names.
- The changelog grew significantly since rc2, delaying the stable release.
- Simon Willison used Claude Fable 5 and GPT-5.5 to help process the backlog of issues and PRs.

## Our Commentary

Simon Willison's `sqlite-utils` is one of those tools you don't realize you need until you use it. Compound foreign keys are a big deal for anyone working with more complex database schemas. I'm always fascinated by how Simon integrates AI into his workflow, using Claude Fable 5 and GPT-5.5 to manage changelogs. It makes me wonder about the future of developer tooling and how much AI will assist in these mundane but critical tasks. The breaking change is something to watch out for, but it seems necessary for the new features.
