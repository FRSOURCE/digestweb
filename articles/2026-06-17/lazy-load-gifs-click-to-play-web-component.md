---
layout: article
title: 'Lazy Load GIFs with <click-to-play> Web Component'
description: 'Discover a new Web Component that transforms GIF links into click-to-play stills, improving page load performance by loading GIFs on demand.'
photo: 'https://picsum.photos/id/749/800/450'
original_url: https://simonwillison.net/2026/Jun/17/click-to-play-component/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [web-platform, javascript, performance, dx]
significance: 2
---

## Summary & Key Takeaways

- Introduces `<click-to-play>`, a Web Component for lazy-loading GIFs.
- It displays a still image with a play button, loading the GIF only on user interaction.
- This component improves page performance by preventing large GIFs from loading automatically.
- It's built with progressive enhancement in mind, ensuring accessibility.
- The component was developed for use within Datasette's new row editing tools.

## Our Commentary

We've all been there, scrolling past a page that chugs because of a dozen auto-playing GIFs. This component is such a simple, elegant solution. I love how it leans into progressive enhancement. It's a small thing, but these small things add up to a much better web experience. It makes me wonder why this isn't a native browser feature already.
