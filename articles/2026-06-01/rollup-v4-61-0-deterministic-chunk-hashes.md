---
layout: article
title: 'Rollup v4.61.0: Deterministic Chunk Hashes for Consistent Builds'
description: "Rollup's latest minor release introduces a feature to sort entry modules, ensuring deterministic chunk hashes for more consistent build outputs."
photo: 'https://opengraph.githubassets.com/5f1cd491d9d90a2e8239df89218bf733835b879fc94073aabd3c09cdd10b542d/rollup/rollup/releases/tag/v4.61.0'
original_url: https://github.com/rollup/rollup/releases/tag/v4.61.0
source_name: 'Rollup Releases'
source_author: ''
tags: [build-tools, release, tooling]
significance: 1
---

## Summary & Key Takeaways

- Rollup v4.61.0 features sorting of entry modules.
- This change makes chunk hashes deterministic.
- Deterministic hashes improve build consistency across environments.

## Our Commentary

Deterministic builds are one of those things you don't think about until they break. Then you really, really care. This is a small but important quality-of-life improvement for anyone dealing with caching or ensuring reproducible builds. It's not flashy, but it's solid engineering.
