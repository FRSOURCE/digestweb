---
layout: article
title: 'SolidJS Diagnostics 2.0 RC.7 Boosts Performance Debugging'
description: 'This release candidate for SolidJS Diagnostics introduces enhanced attribution feedback, new diagnostic tools, and responsiveness gates for deeper performance analysis.'
photo: 'https://opengraph.githubassets.com/b0c1f1c048cc87eee597feb20fa6bc6c32a17dd3e59a61ef360ca7ee52935e21/solidjs/solid/releases/tag/%40solidjs/diagnostics%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fdiagnostics%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, performance]
significance: 3
---

## Summary & Key Takeaways

- Attribution feedback now includes fact tables for async flights and fallbacks.
- `flights` tracks started, landed, and abandoned async operations with wall time.
- `fallbacks` measures fallback display times and sub-150ms flashes.
- New `WIDE_WRITE` and `HOT_SCOPE_FANOUT` diagnostics are added.
- Responsiveness gates like `expectNoSilentHolds` help identify unacknowledged holds.
- The artifact format (v2) now carries `attribution.holds` and `attribution.feedback`.

## Our Commentary

This is a huge leap for SolidJS's diagnostic capabilities. The responsiveness gates, especially `expectNoSilentHolds`, are exactly what we need to catch subtle performance issues before they hit production. I love seeing frameworks invest so heavily in tools that empower developers to build truly performant applications. This is a big win for DX.
