---
layout: article
title: 'Vitest v4.1.3 Introduces Experimental Features and Bug Fixes'
description: 'This minor release of Vitest brings new experimental features like `preParse` flag and custom snapshot matchers, alongside numerous bug fixes to improve stability and developer experience.'
photo: 'https://opengraph.githubassets.com/53cc7ef79921d82f17ce32e682c33b6fc4bebefc7a93fe019ebdbefa64651377/vitest-dev/vitest/releases/tag/v4.1.3'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v4.1.3
source_name: 'Vitest Releases'
source_author: ''
tags: [release, testing, tooling]
significance: 1
---

## Summary & Key Takeaways

- Vitest v4.1.3 introduces several experimental features, including an `experimental.preParse` flag and support for `browser.locators.exact` option.
- Developers can now use `TestAttachment.bodyEncoding` and implement custom snapshot matchers.
- The release also includes numerous bug fixes, such as advancing fake timers with `expect.poll` interval and resolving issues with suite hooks.
- Improvements were made to snapshot handling, error reporting, and type leakage prevention.

## Our Commentary

It's always good to see a testing framework like Vitest continue to iterate quickly. The experimental features, especially custom snapshot matchers, sound like they could unlock some really powerful testing patterns. We're particularly interested in how `preParse` might impact performance for larger test suites. The continuous stream of bug fixes also reassures us about the project's health and responsiveness.
