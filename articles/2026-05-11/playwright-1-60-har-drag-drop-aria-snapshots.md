---
layout: article
title: 'Playwright 1.60 Boosts Testing with HAR Recording, Drag-and-Drop, and Aria Snapshots'
description: 'Playwright 1.60 introduces first-class HAR recording, a new API for simulating drag-and-drop interactions, and enhanced accessibility testing with page-level Aria snapshots.'
photo: 'https://opengraph.githubassets.com/aa2bca8f16efa17997261efccf5b57d439fa0b9c3020bd537c43cbf0c76221a3/microsoft/playwright/releases/tag/v1.60.0'
original_url: https://github.com/microsoft/playwright/releases/tag/v1.60.0
source_name: 'Playwright Releases'
source_author: ''
tags: [testing, release, dx, browser]
significance: 3
---

## Summary & Key Takeaways

- Playwright 1.60 adds `tracing.startHar()` and `tracing.stopHar()` for first-class HAR recording, simplifying network activity capture during tests.
- A new `locator.drop()` API allows simulating external drag-and-drop events, supporting files and clipboard data for robust UI testing.
- `expect(page).toMatchAriaSnapshot()` now works on a `Page` object, with a `boxes` option to include bounding box data for AI consumption.
- The `test.abort()` function enables immediate test failure from fixtures or hooks, useful for unrecoverable error detection.
- New lifecycle events (`browser.on('context')`) are introduced for Browser, Context, and Page objects.

## Our Commentary

Playwright continues to impress with its rapid feature development. Version 1.60 brings some genuinely powerful additions that will make end-to-end testing even more comprehensive. The HAR recording as a first-class API is a huge win for debugging network issues, and `locator.drop()` finally provides a robust way to test complex drag-and-drop interactions. We're also intrigued by the `boxes` option for Aria snapshots – it hints at a future where AI agents might be used to interpret and validate UI layouts, which is a fascinating direction for testing. The `test.abort()` feature is a practical improvement for test suite reliability.
