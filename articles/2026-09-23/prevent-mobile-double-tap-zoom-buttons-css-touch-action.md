---
layout: article
title: 'Prevent Mobile Double-Tap Zoom on Buttons with CSS `touch-action`'
description: 'Andy Bell shares a crucial CSS tip, `touch-action: manipulation;`, to prevent mobile browsers from zooming in on buttons when double-tapped. This improves user experience and maintains accessibility without disabling all zooming.'
photo: 'https://piccalil.b-cdn.net/api/og-image?slug=stop-buttons-triggering-zoom-when-theyre-double-tapped/'
original_url: https://piccalil.li/blog/stop-buttons-triggering-zoom-when-theyre-double-tapped/?ref=articles-rss-feed
source_name: 'Piccalil Blog'
source_author: ''
tags: [css, ux, accessibility, tutorial]
significance: 2
---

## Summary & Key Takeaways

- Mobile browsers can trigger unwanted zoom on buttons with double-taps.
- Disabling all zooming via viewport meta tags is a WCAG violation.
- The CSS property `touch-action: manipulation;` can prevent this specific behavior.
- This property allows panning and pinch zoom while disabling double-tap zoom.
- It improves mobile UX without compromising accessibility.

## Our Commentary

Oh, the dreaded double-tap zoom! This is one of those subtle mobile UX annoyances that can drive users crazy. Andy Bell's tip with `touch-action: manipulation;` is a lifesaver. It's a perfect example of how a single CSS line can make a huge difference for accessibility and user experience.
