---
layout: article
title: 'Optimizing Syntax Highlighting: From PrismJS to MicroLighter'
description: 'Alex Russell details his journey to a custom, lightweight syntax highlighter for Eleventy, focusing on performance and control.'
photo: 'https://picsum.photos/id/534/800/450'
original_url: https://infrequently.org/2026/09/microlighter/
source_name: 'Infrequently Noted (Alex Russell)'
source_author: 'Alex Russell'
tags: [performance, dx, tutorial, web-platform]
significance: 2
---

## Summary & Key Takeaways

Eleventy's `eleventy-plugin-syntaxhighlight` uses PrismJS for build-time highlighting, avoiding client-side bloat.
The default plugin can be restrictive when more control, like line numbering, is needed.
A custom solution, MicroLighter, was developed to address these limitations.
The approach involves leveraging Eleventy's paired shortcodes for stable per-line delimiters.
Optimizations include using faster CSS selectors and minimizing generated HTML.
The goal is to reduce client-side JavaScript and improve overall page performance.

## Our Commentary

I'm always fascinated by the lengths folks go to shave off bytes and milliseconds. Alex Russell's deep dive into syntax highlighting optimization is a masterclass in web performance. We often forget the cumulative impact of seemingly small client-side scripts. This reminds me that even "build-time" solutions can have hidden costs if not carefully managed. It's a good reminder to question every dependency.
