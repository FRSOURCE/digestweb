---
layout: article
title: 'New CSS Multi-Column Layout Features: `column-height` and `column-wrap`'
description: 'Chrome 145 introduces `column-height` and `column-wrap` properties, allowing developers to control multi-column content flow by wrapping overflow into new rows, enabling vertical scrolling.'
photo: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2026/02/chrome-layout.webp'
original_url: https://css-tricks.com/css-multi-column-layout-wrapping-features/
source_name: 'CSS-Tricks'
source_author: ''
tags: [css, web-platform, browser, release]
significance: 3
---

## Summary & Key Takeaways

- Chrome 145 is introducing two new CSS properties: `column-height` and `column-wrap`.
- These properties enhance the control over multi-column layouts in CSS.
- `column-wrap` allows additional content that overflows columns to wrap into a new row below the existing columns.
- This new wrapping behavior enables a vertical scroll for overflow content, preventing unwanted horizontal scrolling.
- The features provide more flexibility and better user experience for complex text and content layouts.

## Our Commentary

This is a genuinely exciting development for CSS layout! Multi-column layouts have always been a bit tricky to manage, especially when content length is dynamic. The introduction of `column-height` and `column-wrap` in Chrome 145 feels like a missing piece of the puzzle.

Preventing horizontal scroll in multi-column layouts by allowing content to wrap into new rows is a huge win for responsive design and user experience. We've definitely wrestled with this problem before, and having native CSS properties to handle it cleanly is a testament to the continuous evolution of the web platform. This will make many complex layouts much simpler to implement.
