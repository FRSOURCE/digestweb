---
layout: article
title: 'Vitest v4.1.5 Released with Bug Fixes and Experimental Coverage Option'
description: 'Vitest v4.1.5 is a maintenance release addressing several bug fixes across various components, including reporters, snapshot testing, and UI. It also introduces an experimental feature for Istanbul instrumenter options in coverage.'
photo: 'https://opengraph.githubassets.com/56edb6652548bd47cfc964c9c1394705545b61e0ee5dd3b3a8a23edccb29c748/vitest-dev/vitest/releases/tag/v4.1.5'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v4.1.5
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling]
significance: 1
---

## Summary & Key Takeaways

- Vitest v4.1.5 is a patch release focused on stability and minor improvements.
- It introduces an experimental feature for Istanbul coverage to support an instrumenter option.
- Numerous bug fixes are included, addressing issues like `--project` negation, HTML reporter labels, `vi.defineHelper` calls, and diff config options in soft assertions.
- Other fixes improve static test discovery, provide better error messages for coverage reports, increase snapshot output length, and enhance JSX/TSX syntax highlighting in the UI.
- It also adds support for `MessagePort` objects in `postMessage` data within web workers.

## Our Commentary

A typical patch release for Vitest, mostly squashing bugs. The experimental Istanbul instrumenter option is a nice addition for those pushing the boundaries of coverage, but the bulk of this release is about stability. It's good to see continuous refinement, especially for a critical tool like a test runner.
