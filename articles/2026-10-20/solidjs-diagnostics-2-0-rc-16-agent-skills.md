---
layout: article
title: 'SolidJS Diagnostics 2.0 RC.16: Agent Skills & Protocol Refinements'
description: "SolidJS diagnostics now ships with 'agent skills' for AI coding assistants and refines its protocol for better debugging insights."
photo: 'https://opengraph.githubassets.com/caa540adb32c1218a460091d45906d586c2e40428a7225c9c39558a061573191/solidjs/solid/releases/tag/%40solidjs/diagnostics%402.0.0-rc.16'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fdiagnostics%402.0.0-rc.16
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, dx, ai, tooling]
significance: 2
---

## Summary & Key Takeaways

- The diagnostics protocol has been updated, moving holds and feedback entries to the `end` payload.
- Captured findings now carry `loc` (source location) as a plain event field for improved debugging.
- The Solid 2.0 primer and cheatsheet are now shipped as 'agent skills' for AI coding assistants.
- Every shipped skill includes required name and description frontmatter for skill registries.
- The `tanstack-intent` keyword is added to skills for better discovery in `node_modules`.

## Our Commentary

This SolidJS diagnostics RC has a fascinating detail: shipping Solid 2.0 primer and cheatsheet as 'agent skills.' We're seeing more and more frameworks think about how AI coding assistants interact with their ecosystems. This is a smart move, making it easier for agents to understand and generate SolidJS code. It's a small step, but it hints at a future where AI is deeply integrated into our dev workflows, not just a separate tool.
