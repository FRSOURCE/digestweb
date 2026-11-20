---
layout: article
title: 'Datasette Gains Streaming Apache Arrow Exports with New Plugin'
description: 'Datasette 1.0a43 now supports streaming export formats, demonstrated by the new `datasette-arrows` plugin, which enables efficient Apache Arrow data exports.'
photo: 'https://static.simonwillison.net/static/2026/arrow-export-dialog.webp'
original_url: https://simonwillison.net/2026/Nov/18/datasette-arrows/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, open-source, research]
significance: 2
---

## Summary & Key Takeaways

- Datasette 1.0a43 introduced a new plugin hook for streaming export formats.
- The `datasette-arrows` plugin leverages this to provide streaming Apache Arrow exports.
- This allows exporting millions of data rows without loading them entirely into memory.
- The plugin was suggested and largely built by Claude Fable 5.2, an AI model.
- The new Arrow export option appears in Datasette's export dialog.

## Our Commentary

Streaming large datasets is a critical capability, and seeing Datasette embrace Apache Arrow for this is fantastic. What really caught my eye, though, is that Claude Fable 5.2 essentially built this plugin. It's a small, tangible example of AI moving beyond just text generation and into actual code implementation for practical tools. It makes me wonder how many more plugins will be "AI-assisted" in the near future.
