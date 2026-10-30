---
layout: article
title: 'SolidJS 2.0 RC.20: Key Fixes for Signals & Hydration'
description: "This release candidate for SolidJS 2.0 brings crucial bug fixes for `isPending` behavior, derived stores, and hydration issues, alongside an improved 'multiple instances' warning."
photo: 'https://opengraph.githubassets.com/b130ce971794460e445a0dda1aaabf47461687dbe8f4a7abb14fcc72e470a293/solidjs/solid/releases/tag/solid-js%402.0.0-rc.20'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.20
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, performance]
significance: 2
---

## Summary & Key Takeaways

- `isPending` for derived store keys no longer incorrectly reads true on first landing.
- Derived stores reading async memos through `latest()` now show correct values immediately.
- Render effects reading errored-then-recovered derived stores now re-run as expected.
- The 'multiple instances of Solid' warning is now more accurate, firing only when instances actually interact.
- Hydrated `<Errored>` boundaries no longer log 'Hydration key miss' for lazily created content.

## Our Commentary

Solid's RC releases are always packed with deep, technical fixes. I appreciate the precision in addressing these edge cases around reactivity and hydration. It shows a commitment to robustness that I think is often overlooked in the rush for new features. The improved 'multiple instances' warning is a small but welcome DX win.
