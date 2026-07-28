---
layout: article
title: 'uv 0.12.0: Significant Changes to Project Initialization and `src/` Layout'
description: '`uv` 0.12.0 brings breaking changes to its `init` command, now defaulting to a `src/` shaped package layout and configuring `uv_build` for distribution files.'
photo: 'https://static.simonwillison.net/static/2026/uv-diff.webp'
original_url: https://simonwillison.net/2026/Jul/28/uv/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, release, open-source]
significance: 2
---

## Summary & Key Takeaways

- `uv` 0.12.0 introduces breaking changes to the `uv init` command.
- New projects now default to a `src/` shaped package layout.
- The release configures `uv_build` for creating wheels and `.tar.gz` distribution files.
- A script alias is set up for executing the main function.
- These changes impact the default project structure for Python development.

## Our Commentary

`uv` is quickly becoming a staple in the Python ecosystem, much like Bun or Turbopack in JavaScript. These kinds of changes to default project structure are always a bit disruptive, but often for the better. I've been meaning to switch to `src/` layout myself, so this might be the push I needed. It's good to see tools evolving.
