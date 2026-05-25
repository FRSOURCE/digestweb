---
layout: article
title: 'Scaling Cross-Document View Transitions with Hundreds of Elements'
description: 'This article explores the challenges of managing unique `view-transition-name` values and CSS selectors when implementing cross-document view transitions at scale. It offers strategies to prevent an unmanageable explosion of styles.'
photo: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/06/dots-loader.jpg'
original_url: https://css-tricks.com/cross-document-view-transitions-part-2/
source_name: 'CSS-Tricks'
source_author: ''
tags: [css, web-platform, performance, ux]
significance: 3
---

## Summary & Key Takeaways

- View Transitions require unique `view-transition-name` values for each element.
- Scaling this to hundreds of elements leads to an explosion of CSS selectors.
- The article addresses the complexity of managing these styles.
- It focuses on strategies for cross-document view transitions.
- Solutions aim to maintain manageable and performant animations.
- The goal is to prevent an unmanageable wall of CSS.

## Our Commentary

View Transitions are fantastic, but I've always wondered about the practicalities of scaling them. This article hits on a very real pain point. The idea of an "unmanageable wall of selectors" for animations is enough to make me shudder. We need robust patterns for these modern CSS features, and I'm glad someone is tackling the hard parts. It's not just about the cool effect; it's about maintainability.
