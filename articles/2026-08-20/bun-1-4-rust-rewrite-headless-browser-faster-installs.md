---
layout: article
title: 'Bun 1.4: Rewritten in Rust, Headless Browser, & 7x Faster Installs'
description: 'Bun 1.4 ships with a Rust rewrite, built-in headless browser automation, new APIs, and improved Node.js compatibility, promising up to 7x faster installs.'
photo: 'https://bun.com/og/blog/bun-v1.4.png'
original_url: https://bun.com/blog/bun-v1.4
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, tooling, performance]
significance: 4
---

## Summary & Key Takeaways

- Bun 1.4 has been rewritten in Rust, enhancing its core performance and stability.
- It introduces built-in headless browser automation via `Bun.WebView`.
- New APIs for image manipulation (`Bun.Image`), Markdown parsing (`Bun.markdown`), JSON5, JSONL, Terminal, and cron are now available.
- Node.js 26.3.0 compatibility has been significantly improved with 1,517 new passing tests.
- The release includes parallel test and run capabilities.
- Windows ARM64 is now supported.
- An opt-in global virtual store can lead to up to 7x faster package installs.

## Our Commentary

Okay, Bun 1.4 is just _wild_. A full rewrite in Rust? That's a massive undertaking. We're talking about a fundamental shift here.
And then they just casually drop "built-in headless browser automation." That's a game-changer for testing and scraping, potentially cutting out a whole dependency layer.
The speed claims are always impressive with Bun, but 7x faster installs with a global virtual store? I'm genuinely curious how that plays out in real-world dev workflows.
It feels like Bun is trying to be _everything_ for JavaScript developers, and honestly, I'm here for it. The ambition is palpable.
