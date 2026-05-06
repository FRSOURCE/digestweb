---
layout: article
title: 'Vitest v5.0.0-beta.2: Breaking Changes & New Features for Testing'
description: "Vitest's latest beta introduces several breaking changes, including updated attachment directories and locator representations, alongside new features like exposing default reporters and improved merge report support."
photo: 'https://opengraph.githubassets.com/6dfec7623180ca31f40080f7f84a629e65ee045b924d59dd6202cc7d0a2edb20/vitest-dev/vitest/releases/tag/v5.0.0-beta.2'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.2
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling]
significance: 2
---

## Summary & Key Takeaways

- Vitest v5.0.0-beta.2 introduces several breaking changes, including default `attachmentsDir` moving to `.vitest/attachments/`.
- The `sequential` test/suite options have been removed in favor of `concurrent`.
- Locators are now represented as objects instead of strings.
- The `expect` package is now inlined, and deprecated entry points have been removed.
- New features include exposing default reporters through `configDefaults.reporters`.
- Improved merge reports for non-sharded multi-environment runs are now supported.
- The release also adds `logger.formatError` and browser-specific enhancements for screenshot path resolution and trace highlighting.

## Our Commentary

A beta for a major version always signals exciting times ahead, and Vitest v5.0.0-beta.2 is no exception. The breaking changes, especially around `attachmentsDir` and the shift from `sequential` to `concurrent` testing, suggest a push towards more streamlined and modern testing practices. We appreciate the clarity in these changes, even if they require some migration effort. The new features, like exposing default reporters and better merge report support, are quality-of-life improvements that will undoubtedly make the testing workflow smoother for many developers. It's good to see Vitest continuing to evolve and refine its approach.
