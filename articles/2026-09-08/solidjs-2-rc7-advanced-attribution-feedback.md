---
layout: article
title: 'SolidJS 2.0 RC.7 Unveils Advanced Attribution & Performance Feedback'
description: 'The core SolidJS 2.0 RC.7 introduces a comprehensive attribution system with ranked performance feedback tables and detailed write provenance for enhanced debugging.'
photo: 'https://opengraph.githubassets.com/27e7c6159e9d855b431ac7186124657933b234abafe1946dd3d9c5d1516c8f40/solidjs/solid/releases/tag/solid-js%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, performance]
significance: 3
---

## Summary & Key Takeaways

- Store overloads are aligned across client, server, and signals entry points.
- Attribution feedback provides ranked tables of async sources and user interactions.
- `sources` ranks holds by silent time, showing `holds`/`heldMs`/`worstMs` and `silent`/`silentMs`.
- `interactions` ranks user events by total cost, including synchronous work and held time.
- Write provenance tracks the origin (interaction, effect, action, async, external) of every change.
- New exported types `FeedbackSource` and `FeedbackInteraction` are available.

## Our Commentary

This is the big one for SolidJS 2.0 RC.7. The depth of the attribution and feedback system is genuinely groundbreaking. Being able to see ranked tables of what users waited on, and tracing every write back to its origin, is a dream for performance debugging. We're talking about a level of insight that few other frameworks offer out of the box. This is a massive step forward for SolidJS's developer experience.
