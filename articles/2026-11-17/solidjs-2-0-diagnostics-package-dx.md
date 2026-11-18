---
layout: article
title: 'SolidJS 2.0 Introduces New Diagnostics Package for Enhanced DX'
description: 'SolidJS 2.0 ships with a new @solidjs/diagnostics package, offering advanced tools for debugging reactivity, performance, and attribution.'
photo: 'https://opengraph.githubassets.com/02356e0137a82091e29f1824fdef74828f422c6061ce2708f480575403a7fa43/solidjs/solid/releases/tag/%40solidjs/diagnostics%402.0.0'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fdiagnostics%402.0.0
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, dx, tooling, release]
significance: 3
---

## Summary & Key Takeaways

- A new `@solidjs/diagnostics` package is introduced with Solid 2.0, providing an agent-consumable diagnostics harness.
- It includes tools to capture artifacts, assert budgets, and detect reactive mistakes.
- Vitest matchers and Playwright adapters are available for testing and capturing artifacts from real pages.
- The package offers live queries for `whyDidRun` and costs against an open session.
- Attribution features track async operations, flight counts, and fallback display times.
- A repair guide maps diagnostic codes to fixes, improving developer understanding and efficiency.

## Our Commentary

This is a big deal for SolidJS developers. We've seen frameworks struggle with providing clear debugging for reactivity, and this new diagnostics package looks like a serious step forward. The idea of 'agent-consumable diagnostics' is intriguing; it feels like a nod to future AI-assisted development workflows. I'm particularly interested in how the attribution engine helps pinpoint performance bottlenecks and 'wasted recomputes.' This could genuinely change how we optimize Solid apps.
