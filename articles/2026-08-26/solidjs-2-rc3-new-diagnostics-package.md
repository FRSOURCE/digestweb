---
layout: article
title: 'SolidJS 2.0 RC.3 Introduces New Diagnostics Package'
description: 'A new @solidjs/diagnostics package ships with SolidJS 2.0 RC.3, offering a comprehensive suite for reactivity debugging and performance analysis.'
photo: 'https://opengraph.githubassets.com/9e88c6bec7d8ea42788664df64ab75d88bf605ed17763142e186f9f8d129b326/solidjs/solid/releases/tag/%40solidjs/diagnostics%402.0.0-rc.3'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fdiagnostics%402.0.0-rc.3
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, tooling, dx]
significance: 3
---

## Summary & Key Takeaways

- New `@solidjs/diagnostics` package provides a harness for dev-mode diagnostics and attribution.
- `captureArtifact()` runs scenarios with open diagnostic channels, folding results into serializable artifacts.
- Assertion helpers like `expectNoDiagnostics` and `expectRerunBudget` gate correctness and update granularity.
- Vitest matchers are available via `@solidjs/diagnostics/vitest` for integrated testing.
- Browser and Playwright adapters enable artifact capture from real pages with live queries.
- A `skills/reactivity-diagnostics` repair guide maps diagnostic codes to fixes.

## Our Commentary

This is a huge win for SolidJS developers. Debugging reactivity graphs can be notoriously tricky, and a dedicated diagnostics package with assertion helpers and browser integration feels like a game-changer. We've seen similar tools in other ecosystems, but Solid's approach here looks incredibly thorough. I'm genuinely excited to see how this improves the developer experience.
