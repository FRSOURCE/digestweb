---
layout: article
title: 'CSS Anchor Positioning: The End of JavaScript Tooltips'
description: 'Tether any element to another purely in CSS — no getBoundingClientRect, no scroll listeners. Tooltips, dropdowns, and popovers that flip automatically when they overflow the viewport.'
photo: https://fastly.picsum.photos/id/47/200/300.jpg?hmac=qgEtmhYzb3otRNnLN3afPLzmn6VJKj6x86OGOjDcBxQ
original_url: https://developer.chrome.com/blog/anchor-positioning-api
source_name: Chrome Developers
source_author: Una Kravets
tags: [css, layout]
---

## Summary & Key Takeaways

CSS Anchor Positioning is finally shipping in all major browsers — and it fundamentally changes how we build tooltips, dropdowns, and floating UI.

The new `anchor()` function lets you tether any element to a named anchor purely in CSS. No `getBoundingClientRect`, no scroll listeners, no JavaScript positioning loops. The browser handles collision detection automatically via `@position-try` fallback blocks, flipping your popover when it would overflow the viewport.

- **`anchor-name: --btn`** — declare any element as an anchor
- **`position-anchor: --btn`** — bind a floating element to it
- **`@position-try`** — define fallback positions for auto-flipping
- **`position-area`** — place the element relative to the anchor with a simple grid-like syntax

## Our Commentary

Combined with the new `position-area` property, complex overlay layouts that once required hundreds of lines of JS can be expressed in a handful of CSS rules. This is one of the most impactful additions to the platform in years — and it pairs beautifully with the Popover API for fully declarative floating UI.
