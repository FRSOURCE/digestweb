---
layout: article
title: 'Vitest v5.0.0-rc.4 Introduces Breaking Change, New Features'
description: "Vitest's latest Release Candidate, v5.0.0-rc.4, includes a breaking change to static file parsing, promotes `clearCache` out of experimental, and adds a new UI link for Playwright traces."
photo: 'https://opengraph.githubassets.com/0bd8c499e7c53b589061d0f52fc605abccb4db6db817e95f2c50a77bf13e1d47/vitest-dev/vitest/releases/tag/v5.0.0-rc.4'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-rc.4
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling, performance]
significance: 2
---

## Summary & Key Takeaways

- Vitest v5.0.0-rc.4 introduces a breaking change by statically parsing files in `vitest list` by default.
- The `clearCache` functionality has been promoted out of experimental status.
- The UI now includes a direct link to open Playwright traces for easier debugging.
- Bug fixes address issues like `oxc.target` duplication and `maxWorkers` propagation.
- Browser-based testing now reports action errors when a task times out.
- A new suite-level report view has been added to the UI.
- Performance improvements include lazily formatting spy matcher failures.

## Our Commentary

Another RC, another step closer to a stable major release. The static file parsing change sounds like it could be a subtle but impactful breaking change for some workflows. We appreciate the continued focus on performance and debugging tools, especially the Playwright trace link – that's a nice touch for DX.
