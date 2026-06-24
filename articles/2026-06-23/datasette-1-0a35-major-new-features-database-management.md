---
layout: article
title: 'Datasette 1.0a35: Major New Features for Database Management'
description: "Simon Willison announces Datasette 1.0a35, a significant alpha release introducing new 'Create table' and 'Alter table' interfaces. This update also brings stable template context documentation, enhancing Datasette's core functionality."
photo: 'https://static.simonwillison.net/static/2026/create-alter-demo-first-frame.jpg'
original_url: https://simonwillison.net/2026/Jun/23/datasette/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, release, dx, open-source]
significance: 3
---

## Summary & Key Takeaways

- Datasette 1.0a35 introduces a new 'Create table' interface with JSON API backing.
- Users can now define columns, primary keys, custom types, and foreign keys.
- A new 'Alter table' action allows modifying existing tables, including column changes and renaming.
- The alter table dialog also includes a 'Drop table' button.
- Stable Template context documentation is now available for custom templates.
- This documentation is generated from dataclass definitions and tested against actual contexts.

## Our Commentary

Datasette just keeps getting better. These new create/alter table features are huge. It's moving from a data exploration tool to something you can genuinely use for light database management. I've always loved how Simon builds in public, and seeing these capabilities land is exciting. It makes Datasette even more compelling for quick data projects. We're seeing a trend of powerful, lightweight tools that just _work_.
