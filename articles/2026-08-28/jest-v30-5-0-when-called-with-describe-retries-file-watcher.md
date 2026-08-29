---
layout: article
title: 'Jest v30.5.0: `whenCalledWith`, Describe Retries & New File Watcher'
description: "Jest's latest minor release, v30.5.0, brings powerful new testing features including argument-specific mock return values, block-level test retries, and an updated file watcher."
photo: 'https://opengraph.githubassets.com/785b1f69b2c157b5eb7153246f5ef52371d7d869d97630b78f64ea74a86787a7/jestjs/jest/releases/tag/v30.5.0'
original_url: https://github.com/jestjs/jest/releases/tag/v30.5.0
source_name: 'Jest Releases'
source_author: ''
tags: [testing, release, javascript, dx]
significance: 3
---

## Summary & Key Takeaways

- Mock functions now support `whenCalledWith` to configure return values based on specific arguments.
- `jest.retryTimes()` can now be applied to entire `describe` blocks, rerunning all hooks and tests.
- The file watcher for non-Watchman environments has been rewritten using `@parcel/watcher`.
- `fdir` replaces hand-rolled directory recursion in the crawler.
- The release touches `jest-runtime`, `jest-resolve`, and `jest-haste-map` extensively.
- Argument slots for `whenCalledWith` accept literals or asymmetric matchers.

## Our Commentary

This is a genuinely big release for Jest, despite being a minor version. `whenCalledWith` is a game-changer for mocking complex scenarios, and describe-level retries will save so much headache for flaky integration tests. I'm also curious about the new file watcher; performance improvements there are always welcome. It's a solid set of features that will make testing more robust and flexible.
