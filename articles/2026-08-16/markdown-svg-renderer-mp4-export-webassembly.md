---
layout: article
title: 'Markdown SVG Renderer Gets MP4 Export via WebAssembly'
description: 'Simon Willison updates his markdown-svg-renderer tool, adding the ability to convert animated SVGs to MP4 videos directly in the browser using ffmpeg.wasm. This simplifies sharing dynamic SVGs on various platforms.'
photo: 'https://static.simonwillison.net/static/2026/rendered-svg.webp'
original_url: https://simonwillison.net/2026/Aug/16/markdown-svg-upgrades/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, wasm, web-platform, dx]
significance: 2
---

## Summary & Key Takeaways

• The tool renders Markdown with embedded SVGs, transforming raw SVG blocks into interactive displays.
• New features include PNG and JPEG export for static image sharing.
• A significant addition is MP4 video export for animated SVGs.
• MP4 conversion leverages `ffmpeg.wasm` running entirely within the browser.
• This enables easy sharing of animated SVGs on platforms without native SVG animation support.
• The tool attempts to guess animation loop duration for video generation.

## Our Commentary

This is genuinely cool. We've all hit that wall trying to share an animated SVG somewhere that just doesn't support it. Simon's solution, pulling in ffmpeg.wasm to do the heavy lifting right in the browser, is just _chef's kiss_. It's a perfect example of how WebAssembly can unlock serious desktop-app-level functionality on the web. I'm always impressed by these kinds of practical, elegant solutions to common web dev frustrations. It makes me wonder what other media conversions could live entirely client-side.
