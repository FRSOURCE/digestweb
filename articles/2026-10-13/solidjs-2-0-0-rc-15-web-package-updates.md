---
layout: article
title: 'SolidJS 2.0.0-rc.15: Web Package Updates Element Claims & Server Functions'
description: "This release candidate for SolidJS 2.0.0's web package refines element claiming behavior and server function error reporting, alongside minor JSX type adjustments."
photo: 'https://opengraph.githubassets.com/cbffa860007617d7db7022641ad76d9c2dc6bcbc54dad197b440be4ecc09233e/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.15'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.15
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, release]
significance: 1
---

## Summary & Key Takeaways

- Element claims now fire after initial attributes are applied, improving dynamic attribute handling.
- Server-function calls no longer report thrown `Response` values as failures, aligning with HTTP dispatch.
- Non-standard `<a>` attributes like `state` and `noscroll` have been removed from core JSX types.

## Our Commentary

We're seeing a lot of RC updates for SolidJS 2.0.0. This one is pretty deep in the weeds, focusing on internal mechanics like element claims. It's good to see the team refining these core behaviors, but I'm really just waiting for the stable 2.0.0 release to drop. The changes here are important for Solid's robustness, but they don't scream 'new feature' to the average developer.
