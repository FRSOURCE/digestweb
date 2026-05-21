---
layout: article
title: "Dagster Adopts 'ty' Type Checker, Finds Bugs Pyright Missed"
description: "Dagster shares their experience migrating to Astral's new Python type checker, `ty`, reporting dramatic performance gains and the unexpected discovery of real runtime bugs that Pyright had overlooked."
photo: 'https://cdn.prod.website-files.com/681399f654933b29e12fb8e4/6a0dc19a128383c9cf589f1c_Dignified%20Python%20%2B%20Ty.png'
original_url: https://dagster.io/blog/we-tried-ty-for-performance-it-found-real-bugs
source_name: 'Dagster Blog'
source_author: ''
tags: [tooling, performance, testing, open-source]
significance: 2
---

## Summary & Key Takeaways

- Dagster adopted Astral's new Python type checker, `ty`.
- The migration resulted in dramatic performance improvements for type checking.
- `ty` unexpectedly identified real runtime bugs that Pyright had missed.
- The article details lessons learned from incrementally migrating a large Python codebase.

## Our Commentary

This is the kind of story I love to hear about new tooling. Not just "it's faster," but "it found _real bugs_." It makes me wonder what other hidden issues are lurking in codebases relying on older or less rigorous type checkers. It's a strong endorsement for `ty` and a reminder that good tooling isn't just about speed.
