---
layout: article
title: 'SolidJS Signals 2.0 RC.7 Enhances Attribution Feedback & Store Overloads'
description: 'SolidJS Signals 2.0 RC.7 introduces detailed attribution feedback for async operations and fallbacks, alongside aligning store overloads for better consistency.'
photo: 'https://opengraph.githubassets.com/e2ccd0fd3d751c54207db688fba4150f722727dbb03ab9a2d5050a8302c65f2f/solidjs/solid/releases/tag/%40solidjs/signals%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fsignals%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, performance]
significance: 2
---

## Summary & Key Takeaways

- Queued effects are now preserved when pending actions merge into transactions.
- Store overloads are aligned across signals, client, and server entry points.
- Attribution feedback gains fact tables for flights (started, landed, abandoned).
- Fallbacks now measure how often and long fallbacks were shown, including flashes.
- Source rows include `late`/`lateMs` for acknowledged holds past `holds.infoMs`.

## Our Commentary

The level of detail SolidJS is building into its attribution and feedback system is genuinely impressive. Understanding async flight paths and fallback performance is crucial for building truly responsive applications. This is the kind of deep insight that can elevate a developer's ability to diagnose and optimize.
