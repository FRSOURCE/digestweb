---
layout: article
title: 'Firefox Prefetching Bug: Datasette Fixes Unnecessary HTTP Link Headers'
description: 'A deep dive into a 24-year-old Firefox bug causing unnecessary HTTP prefetching and how Datasette implemented a fix.'
photo: 'https://picsum.photos/id/759/800/450'
original_url: https://simonwillison.net/2026/Nov/7/link-rel-next/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [browser, performance, dx]
significance: 1
---

## Summary & Key Takeaways

- Firefox has a 24-year-old bug that causes it to prefetch `rel="next"` links in HTTP headers for HTML pages.
- This behavior leads to browsers fetching unnecessary data and servers rendering pages that are often discarded.
- Simon Willison discovered Datasette was affected and implemented a conditional fix to prevent serving these headers to Firefox.
- The issue was first documented by Willison himself in 2002, a detail he had completely forgotten.

## Our Commentary

I'm genuinely fascinated by how these ancient browser quirks resurface. A 24-year-old bug! And Simon Willison, the original reporter, had forgotten about it entirely. It's a stark reminder of the web's long memory and how small, seemingly innocuous details can impact performance. We often chase the shiny new APIs, but sometimes the biggest wins are in fixing these long-standing, subtle inefficiencies. It makes me wonder what other forgotten 'features' are out there, quietly consuming resources.
