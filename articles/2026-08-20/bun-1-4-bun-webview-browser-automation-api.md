---
layout: article
title: 'Bun 1.4 Unleashes `Bun.WebView` for Browser Automation'
description: 'Bun 1.4 introduces `Bun.WebView`, enabling powerful browser automation directly within the runtime, opening new possibilities for web scraping and testing.'
photo: 'https://picsum.photos/id/905/800/450'
original_url: https://simonwillison.net/2026/Aug/20/bun-webview-json-api/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [bun, tooling, dx, release]
significance: 3
---

## Summary & Key Takeaways

• Bun 1.4 has been released, featuring a significant Rust rewrite under the hood.
• The release includes numerous new features, bug fixes, and performance improvements.
• `Bun.WebView` is a standout addition, offering first-class browser automation.
• It supports both macOS WebKit and local Chromium via the Chrome DevTools Protocol.
• A prototype JSON API was built to demonstrate `Bun.WebView`'s capabilities for executing JavaScript against web pages.
• The prototype service required 192MB-256MB of RAM for full Chrome operation.
• Other new features include `Bun.Image`, `Bun.markdown`, `Bun.cron()`, and parallel test/run commands.

## Our Commentary

Bun 1.4 is a beast of a release. We're still reeling from the Rust rewrite news, and now they drop `Bun.WebView`? This is huge for anyone doing web scraping, testing, or even just generating screenshots. The idea of having browser automation baked directly into the runtime, without external dependencies like Playwright or Puppeteer, is incredibly appealing. I'm excited to see how this impacts the tooling ecosystem. The memory footprint for a full Chrome instance is something to watch, but the convenience might outweigh it for many use cases.
