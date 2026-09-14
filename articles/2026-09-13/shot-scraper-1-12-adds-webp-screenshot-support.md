---
layout: article
title: 'shot-scraper 1.12 Adds WebP Screenshot Support'
description: "Simon Willison's `shot-scraper` tool receives an update to version 1.12, introducing support for capturing screenshots in the WebP format. This allows for significantly smaller file sizes."
photo: 'https://picsum.photos/id/628/800/450'
original_url: https://simonwillison.net/2026/Sep/13/shot-scraper/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, performance, open-source]
significance: 1
---

## Summary & Key Takeaways

`shot-scraper` version 1.12 now supports WebP image format.
Users can specify WebP output with the `-o` and `--quality` options.
WebP screenshots are generally much smaller than JPEG or PNG.
The feature was implemented to generate images for the `commit-rewriter` tool.

## Our Commentary

Another small, practical update from Simon. WebP support for screenshots is a solid win for performance, especially if you're generating a lot of them. It's a nice, incremental improvement to a tool that already does one thing well. We appreciate the continuous refinement.
