---
layout: article
title: 'Vitest v5.0.0-rc.2 Released with GitHub Actions Reporter & Browser Fixes'
description: "Vitest's latest release candidate introduces a custom GitHub Actions summary title and crucial bug fixes for browser testing and concurrency."
photo: 'https://opengraph.githubassets.com/ae84c0dea27f97dc33040d2d137fe77a80635f2c563c8a5ecbc18f21448cd8ed/vitest-dev/vitest/releases/tag/v5.0.0-rc.2'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-rc.2
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling]
significance: 2
---

## Summary & Key Takeaways

- Vitest v5.0.0-rc.2 introduces a custom GitHub Actions summary title for improved reporting.
- It revives the global concurrency limit for the test lifecycle, enhancing stability.
- Several bug fixes address issues with browser testing, including graceful exits and GC triggers.
- The release improves handling of post-restart reruns and process exit in workers.
- Snapshot evaluation now supports no-unsafe-eval CSP by processing files on the server.
- UI improvements include fixes for code editor errors and layout shifts.
- Security enhancements require authentication for coverage reports and UI subtree requests.

## Our Commentary

A release candidate for Vitest v5 is out, and it's packed with some solid improvements. We're particularly interested in the GitHub Actions reporter enhancements; better CI/CD integration is always a win. The browser testing fixes are also crucial, as flaky browser tests are a nightmare. It's good to see them tightening up security around coverage reports too. This feels like a strong step towards a stable v5, and we're eager to see the final release.
