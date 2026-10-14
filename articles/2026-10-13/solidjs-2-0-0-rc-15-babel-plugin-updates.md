---
layout: article
title: 'SolidJS 2.0.0-rc.15 Babel Plugin Improves SSR & Input Handling'
description: 'This SolidJS 2.0.0 release candidate for the Babel plugin enhances element claims, input binding, and SSR link marking, aligning with compiler updates.'
photo: 'https://opengraph.githubassets.com/19d108c53193c42f66ff1f81a3d3be2a4b37aae272193b8e982fffc85dcbca09/solidjs/solid/releases/tag/%40solidjs/babel-plugin%402.0.0-rc.15'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fbabel-plugin%402.0.0-rc.15
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release, tooling]
significance: 1
---

## Summary & Key Takeaways

- Element claims are now emitted after initial attributes, ensuring parity across compilers.
- Non-hydratable client builds correctly remove `value` attribute for nullish checkbox/radio inputs.
- Select's bound value is reapplied when options arrive after the value was written.
- SSR now allows routers to mark links in server HTML, improving link state handling.

## Our Commentary

The Babel plugin for SolidJS 2.0.0 also gets an RC update, bringing it in line with the compiler changes. It's good to see consistency across the toolchain. These are mostly under-the-hood improvements that will make the developer experience smoother, especially for those dealing with SSR and complex form inputs. It's all about getting those last few kinks out before the big 2.0.0 release.
