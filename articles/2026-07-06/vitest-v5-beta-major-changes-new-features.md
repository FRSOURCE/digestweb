---
layout: article
title: 'Vitest v5 Beta: Major Changes & New Features Land'
description: 'The latest beta for Vitest v5.0.0 brings significant updates, including breaking changes, new mocking capabilities, and improved reporter configurations.'
photo: 'https://opengraph.githubassets.com/0d5d11713b74f652766cd8a0185ede27ce02f8c98df4528356327583c11ca9ab/vitest-dev/vitest/releases/tag/v5.0.0-beta.6'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.6
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling, javascript]
significance: 3
---

## Summary & Key Takeaways

- Introduces `vi.when()` for more flexible mocking.
- Adds `screenshotDirectory` configuration for browser testing.
- Updates `@sinonjs/fake-timers` to support Temporal API mocking.
- Clears mocks by default before each test, a notable breaking change.
- Changes default output directories for JSON, JUnit, and HTML reporters to `.vitest`.
- Removes the `webdriverio` package, streamlining dependencies.
- Hardens UI API access for improved security.
- Includes various bug fixes and stability improvements.

## Our Commentary

Vitest v5 is shaping up to be a big one. Clearing mocks by default before each test? That's a bold move, but probably the right one for consistency. I'm genuinely curious how the community will adapt to some of these breaking changes. Supporting Temporal API mocking is a nice touch, showing they're keeping pace with modern JS. We're watching this beta closely.
