---
layout: article
title: 'shot-scraper 1.11 Improves Command Consistency and Server Startup'
description: '`shot-scraper` version 1.11 introduces minor enhancements, including a new `--js-file` option and more robust server startup waiting for video and multi-shot commands.'
photo: 'https://picsum.photos/id/296/800/450'
original_url: https://simonwillison.net/2026/Jul/12/shot-scraper/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, release]
significance: 1
---

## Summary & Key Takeaways

- `shot-scraper` 1.11 brings minor improvements to the command-line tool.
- The `server:` mechanism for `shot-scraper video` and `shot-scraper multi` now waits up to 30 seconds for the target URL.
- A new `--js-file` option is available for loading JavaScript from a file, stdin, or a GitHub script.
- The `javascript` and `html` commands now include a `--timeout` option for consistency.

## Our Commentary

`shot-scraper` is a neat utility, and these quality-of-life updates are always welcome. We appreciate the attention to detail, especially the improved server startup logic. It's those small frustrations that can really add up, so ironing them out is a win.
