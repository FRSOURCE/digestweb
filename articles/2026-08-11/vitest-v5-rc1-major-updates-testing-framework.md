---
layout: article
title: 'Vitest v5.0.0-rc.1: Major Updates for Testing Framework'
description: 'The latest release candidate for Vitest brings substantial changes, enhancing project configuration, browser testing, and VM pool functionality. Expect breaking changes and powerful new features.'
photo: 'https://opengraph.githubassets.com/b6eef1a0b74559314d589f61a14c138f477bfa4b15f647355ce7bc3084394df1/vitest-dev/vitest/releases/tag/v5.0.0-rc.1'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-rc.1
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling, javascript]
significance: 3
---

## Summary & Key Takeaways

Vitest v5.0.0-rc.1 is a release candidate with numerous breaking changes and new features.
Inline projects now extend the root configuration by default.
Support for nested projects has been added, improving monorepo compatibility.
Browser testing now includes saving failure screenshots to `attachmentsDir`.
The test runner can now report duration breakdowns as percentages.
VM pools now support `require(esm)`, expanding module compatibility.
Asynchronous assertions that are not awaited will now cause tests to fail.
Mocking of Temporal objects is now possible without fake timers.

## Our Commentary

Vitest keeps pushing. A v5 release candidate already? It feels like v4 just landed. We're seeing some serious breaking changes here, especially around inline projects and how they extend configs. I'm particularly interested in the browser screenshot saving; that's a nice touch for debugging. The `require(esm)` in VM pools is also a big deal for broader compatibility. It's a lot to digest, but it shows a commitment to evolving the testing landscape.
