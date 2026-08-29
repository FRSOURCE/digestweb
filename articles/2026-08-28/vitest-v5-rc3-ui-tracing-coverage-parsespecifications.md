---
layout: article
title: 'Vitest v5.0.0-rc.3: UI Tracing, Coverage & `parseSpecifications`'
description: "Vitest's latest release candidate for v5 brings significant UI improvements for test tracing, switches to new IstanbulJS packages for coverage, and stabilizes `parseSpecifications`."
photo: 'https://opengraph.githubassets.com/d93ad329bfba37a6663e73ad69f86e99654a69dc34f9bd273ff57e9f6bc6dd48/vitest-dev/vitest/releases/tag/v5.0.0-rc.3'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-rc.3
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- The `parseSpecifications` feature has been promoted out of experimental status.
- Coverage reporting now switches to `@vitest/istanbuljs` packages.
- The UI gains features like highlighting editor source locations and keyboard navigation for trace steps.
- Trace view selections and split pane sizes can now be persisted in the URL.
- Bug fixes include combining project filters and invalidating resolved setup files.
- Browser testing with `ui: true` no longer hangs in projects.
- Snapshot testing improves with rejection for `toMatchFileSnapshot` using the same file as `toMatchSnapshot`.

## Our Commentary

Vitest continues to impress with its rapid development. The UI improvements for tracing and coverage are a big win for developer experience. I'm particularly interested in how the new IstanbulJS packages will affect coverage reporting. It's good to see them pushing towards a stable v5 with such thoughtful features.
