---
layout: article
title: 'Jest 30.5.2: TypeScript Stripping & Stability Fixes'
description: 'Jest 30.5.2 introduces TypeScript type stripping with Node and delivers several bug fixes for improved stability and compatibility.'
photo: 'https://opengraph.githubassets.com/9a02ee5ae80754fa8e60506df0c06b0ac27180de118a30f7ce58ad3f031f87b2/jestjs/jest/releases/tag/v30.5.2'
original_url: https://github.com/jestjs/jest/releases/tag/v30.5.2
source_name: 'Jest Releases'
source_author: ''
tags: [jest, testing, release, typescript]
significance: 1
---

## Summary & Key Takeaways

- Adds a feature to strip TypeScript types with Node when no other transformer is configured for `.ts` files.
- Fixes an issue where `require('../package.json')` was not kept external during bundling.
- Escapes table row keys in `jest-each` to prevent `Invalid regular expression` errors.
- Resolves absolute Windows paths in source maps correctly.
- Includes contributions from new community members.

## Our Commentary

A solid patch release for Jest. The TypeScript stripping feature is a nice quality-of-life improvement for some setups. The bug fixes, especially for `jest-each` and source maps, are important for maintaining stability. It's good to see continuous refinement in such a widely used testing framework.
