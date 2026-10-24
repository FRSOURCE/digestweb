---
layout: article
title: 'SolidJS 2.0.0-rc.18: Core Framework Refinements and DX Improvements'
description: 'The latest release candidate for SolidJS 2.0.0 brings core framework refinements, including better handling of async iterables and significant developer experience improvements. It also incorporates performance boosts from updated serialization.'
photo: 'https://opengraph.githubassets.com/cd8fb332f466a972c76307b8f62ce63d0eb7d4afda9136543114bf801ddb0f9e/solidjs/solid/releases/tag/solid-js%402.0.0-rc.18'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.18
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, dx]
significance: 3
---

## Summary & Key Takeaways

- `from(source)` now converts callback subscriptions, Observables, or AsyncIterables into AsyncIterables for computations.
- Developer experience improved by fixing `STRICT_READ_UNTRACKED` and `PRIMITIVE_IN_EFFECT_CALLBACK` logs in dev mode.
- Live updates for rows with stable markup now send text and attribute edits, not full HTML.
- `seroval` and `seroval-plugins` updated to 1.7.0, boosting hydration and JSON write performance by 20-35%.
- DOM docs and cheatsheet clarify `ref-timing` note regarding `el.ownerDocument.defaultView`.

## Our Commentary

SolidJS 2.0.0-rc.18 is shaping up nicely. The `from(source)` enhancements for async iterables feel like a natural evolution for reactive data streams. I'm particularly happy about the dev-mode fixes; those strict read warnings could be a bit noisy. The `seroval` performance bump is just icing on the cake.
