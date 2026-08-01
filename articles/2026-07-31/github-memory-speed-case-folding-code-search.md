---
layout: article
title: 'GitHub Achieves Memory-Speed Case-Folding for Code Search'
description: 'GitHub engineers detail how they optimized case-folding for code search to over 45 GiB/s on a single core using branch-free loops and byte-space arithmetic.'
photo: 'https://github.blog/wp-content/uploads/2026/01/generic-github-invertocat-logo.png?fit=1920%2C1080'
original_url: https://github.blog/engineering/architecture-optimization/dont-stop-early-case-folding-source-code-at-memory-speed/
source_name: 'GitHub Blog'
source_author: ''
tags: [performance, tooling, research]
significance: 2
---

## Summary & Key Takeaways

- GitHub optimized case-folding for code search to achieve speeds over 45 GiB/s on a single core.
- The optimization relies on branch-free loops and byte-space arithmetic.
- This technique processes every byte of source code at memory speed.
- The article provides a deep dive into the architectural and optimization choices.

## Our Commentary

This is the kind of deep-dive engineering content we love to see. Achieving memory-speed processing for something as fundamental as case-folding is a masterclass in optimization. It's a reminder that even seemingly simple operations can hide immense performance potential with clever algorithmic design. We're always fascinated by how these giants squeeze every last drop of performance out of their systems.
