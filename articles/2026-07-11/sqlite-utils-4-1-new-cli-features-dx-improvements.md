---
layout: article
title: 'sqlite-utils 4.1: New CLI Features & DX Improvements'
description: 'sqlite-utils 4.1 introduces new CLI options for inserting data via Python code, overriding column types, dropping indexes, and querying from standard input.'
photo: 'https://picsum.photos/id/580/800/450'
original_url: https://simonwillison.net/2026/Jul/11/sqlite-utils/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, open-source]
significance: 2
---

## Summary & Key Takeaways

- `sqlite-utils insert` and `upsert` now accept a `--code` option to generate rows with Python.
- A new `--type` option allows overriding automatically chosen column types during insertion.
- The `table.drop_index()` method and `drop-index` command are now available.
- `sqlite-utils query` can read SQL queries directly from standard input.
- `sqlite-utils upsert` can now infer primary keys from existing tables.

## Our Commentary

Simon Willison's `sqlite-utils` just keeps getting better. The `--code` option for `insert`/`upsert` is a genuinely clever addition, making it even more flexible for scripting. I also appreciate the `--type` override; that's a common headache with CSV imports. These are small but mighty improvements that make working with SQLite from the CLI a smoother experience.
