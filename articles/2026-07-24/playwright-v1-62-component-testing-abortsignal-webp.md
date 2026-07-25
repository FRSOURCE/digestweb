---
layout: article
title: 'Playwright v1.62.0: Component Testing, AbortSignal, & WebP Screenshots'
description: 'Playwright v1.62.0 introduces a new story-based component testing model, adds `AbortSignal` support for canceling operations, and enables WebP format for screenshots. These updates enhance testing flexibility and efficiency.'
photo: 'https://opengraph.githubassets.com/0da105530f7163f7ce9d920b60d877b53de0a08252a6c89c30c03a45a671db76/microsoft/playwright/releases/tag/v1.62.0'
original_url: https://github.com/microsoft/playwright/releases/tag/v1.62.0
source_name: 'Playwright Releases'
source_author: ''
tags: [testing, release, dx, browser]
significance: 3
---

## Summary & Key Takeaways

- A new component testing model is introduced, utilizing stories and galleries.
- The `fixtures.mount()` fixture now mounts stories by ID and returns a scoped locator.
- Most Playwright operations and web-first assertions now accept an `AbortSignal` for cancellation.
- Screenshot assertions (`toHaveScreenshot()`) and standalone screenshots (`page.screenshot()`) support the WebP format.
- WebP screenshots can be lossless or lossy, allowing for quality-size trade-offs.

## Our Commentary

Playwright just keeps delivering. The new component testing model sounds like a huge step towards more integrated and efficient UI testing. And `AbortSignal` support? That's a game-changer for handling flaky tests or long-running operations gracefully. We've been waiting for better screenshot formats too, so WebP is a welcome addition. This release feels incredibly polished.
