---
layout: article
title: 'View Transitions API Lands Cross-Document Support'
description: 'Smooth animated page transitions in multi-page apps with a single CSS rule — no SPA required. The browser screenshots, then animates between states with full CSS control.'
photo: https://fastly.picsum.photos/id/47/200/300.jpg?hmac=qgEtmhYzb3otRNnLN3afPLzmn6VJKj6x86OGOjDcBxQ
original_url: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
source_name: MDN Web Docs
source_author: MDN contributors
tags: [javascript, browser]
---

## Summary & Key Takeaways

The View Transitions API now supports cross-document page transitions in all Chromium browsers — no SPA required. Add a single CSS rule and your multi-page app gets smooth animated transitions between navigations.

The trick: the browser takes a screenshot before the new page renders, then animates between the two states using CSS. You control the animation entirely through `@keyframes` on `::view-transition-old` and `::view-transition-new` pseudo-elements.

- **`@view-transition { navigation: auto; }`** — opt the whole site in
- **`view-transition-name`** — choreograph hero element animations across pages
- **`::view-transition-old` / `::view-transition-new`** — fully customise the animation

## FRSOURCE Commentary

Firefox support is on the horizon, making this a genuine progressive enhancement option for production sites today. Pair with the Navigation API for complete control over the transition lifecycle, including async data fetching mid-transition.
