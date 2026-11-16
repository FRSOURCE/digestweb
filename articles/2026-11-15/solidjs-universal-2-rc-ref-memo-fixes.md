---
layout: article
title: 'SolidJS Universal 2.0.0-rc.22: Ref Callback & Memo Fixes'
description: 'This SolidJS release candidate addresses specific issues with ref callbacks and memo behavior, ensuring more reliable component updates.'
photo: 'https://opengraph.githubassets.com/bfbef48f2bb380cee4712826f4c02cf4fcdea14ae750e0d9dd672cd3f9d61e20/solidjs/solid/releases/tag/%40solidjs/universal%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Funiversal%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release]
significance: 1
---

## Summary & Key Takeaways

- Ref callbacks reading sync memos on mounted rows no longer leave updates held indefinitely.
- Ref callbacks now run untracked within the element creation pass, seeing what that pass is building.
- This prevents stale reads that could halt the application in specific scenarios.

## Our Commentary

These `ref` callback fixes are pretty niche, but crucial for correctness. It's the kind of detail that can cause subtle, hard-to-debug issues, so it's good to see SolidJS addressing these edge cases in the run-up to 2.0.
