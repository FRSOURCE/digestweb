---
layout: article
title: 'PCGamer Article Performance Audit by Simon Willison'
description: 'Simon Willison conducts a performance audit of a PCGamer article, identifying areas for optimization. This provides practical insights into web performance analysis and improvement.'
photo: 'https://picsum.photos/id/565/800/450'
original_url: https://simonwillison.net/2026/Mar/22/pcgamer-audit/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [performance, tutorial, browser]
significance: 1
---

## Summary & Key Takeaways

- Simon Willison performed a detailed performance audit of an article on PCGamer.com.
- The analysis covers loading speed, render-blocking resources, and opportunities for improvement.
- PCGamer is a high-traffic commercial site with real constraints — ad networks, CMS overhead — making this more representative than tutorial examples.

## Our Commentary

Real sites make the best test subjects because they carry actual baggage: third-party scripts, ad networks, legacy markup. An audit of a site like PCGamer shows what performance trade-offs look like under real publishing constraints, not what the ideal Lighthouse score looks like in isolation. Worth reading with your own site's compromises in mind.
