---
layout: article
title: 'Python 3.15 Arrives with Lazy Imports and New Sampling Profiler'
description: 'Python 3.15 is released, bringing explicit lazy imports (PEP 810) to optimize startup times and a new sampling profiler, Tachyon. This update also includes enhanced unpacking in comprehensions.'
photo: 'https://static.simonwillison.net/static/2026/profiler-output.webp'
original_url: https://simonwillison.net/2026/Oct/12/python-3-15/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, ai, release, dx]
significance: 3
---

## Summary & Key Takeaways

- Python 3.15 has been released, introducing several new features.
- Explicit lazy imports (PEP 810) are a major addition, improving startup performance for applications with heavy dependencies.
- The new unpacking syntax in comprehensions (PEP 798) offers more concise list, set, and dictionary manipulations.
- A new sampling profiler, Tachyon (`profiling.sampling`), joins the existing tracing profiler.
- The update allows developers to deprecate support for Python 3.10 and embrace 3.11 features.

## Our Commentary

Python 3.15's lazy imports are a game-changer for CLI tools and applications with many optional dependencies. I've wrestled with slow startup times myself, and this feels like a direct answer to that pain. The new profiler is also a welcome addition; performance debugging can be such a black box. It's good to see the language continue to evolve with developer experience in mind.
