---
layout: article
title: "Datasette 1.0a30: Customizable 'Jump to...' Menu Enhances Navigation"
description: "Datasette's latest alpha release, 1.0a30, brings a new 'Jump to...' menu, significantly improving navigation. This feature is extensible via a new plugin hook."
photo: 'https://picsum.photos/id/240/800/450'
original_url: https://simonwillison.net/2026/May/24/datasette/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

Datasette 1.0a30 introduces a new customizable "Jump to..." menu.
Users can activate this menu by hitting the `/` key.
The menu provides quick navigation within Datasette instances.
A new `jump_items_sql()` plugin hook allows developers to extend the menu.
This enhances the discoverability and accessibility of data and features.
The feature is available for testing on `latest.datasette.io`.

## Our Commentary

I'm always impressed by the thoughtful DX in Datasette. This "Jump to..." menu feels like a small thing, but it's the kind of detail that makes a tool genuinely pleasant to use. We've seen similar patterns in IDEs and command palettes, and it just works. The plugin hook is the real kicker here, opening up so many possibilities for custom workflows. It's a smart move.
