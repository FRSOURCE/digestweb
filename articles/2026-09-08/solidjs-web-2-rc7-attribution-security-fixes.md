---
layout: article
title: 'SolidJS Web 2.0 RC.7 Introduces Attribution & Security Fixes'
description: 'This release candidate for SolidJS Web brings a new attribution system for tracking change origins and a critical security fix for GET() grant binding.'
photo: 'https://opengraph.githubassets.com/47ad4fe316ba05f34ef2b9e601be2fc93101384b1c0ccf3ffa7e6cc4af82e50f/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, performance]
significance: 2
---

## Summary & Key Takeaways

- A new attribution system tracks the origin of every root change record.
- Interaction, effect, action, async, and external frames now carry origin data.
- `DEV.attribution.withInteraction` allows custom renderers to declare interactions.
- Core dev hooks `effectRunStart`/`End` and `actionStepStart`/`End` are introduced.
- A security fix binds GET() grants to the declared function identity.

## Our Commentary

SolidJS continues to impress with its deep commitment to developer experience, even in release candidates. The new attribution system feels like a game-changer for debugging complex reactivity flows. I'm always a fan of tools that help us understand _why_ things are happening, not just _what_. This level of introspection is rare and genuinely exciting.
