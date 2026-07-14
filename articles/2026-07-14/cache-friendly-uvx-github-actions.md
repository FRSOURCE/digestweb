---
layout: article
title: 'Cache-Friendly `uvx` in GitHub Actions: A Practical Guide'
description: 'Learn a clever trick to optimize `uvx` usage in GitHub Actions by leveraging `UV_EXCLUDE_NEWER` for efficient caching. This method prevents repeated PyPI downloads, speeding up your CI/CD.'
photo: 'https://picsum.photos/id/628/800/450'
original_url: https://simonwillison.net/2026/Jul/14/uvx-github-actions-cache/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, performance, tutorial]
significance: 2
---

## Summary & Key Takeaways

- `uvx` can be made cache-friendly in GitHub Actions by setting `UV_EXCLUDE_NEWER`.
- This environment variable pins tool versions to a specific date, improving cache hit rates.
- The date can be included in the GitHub Actions cache key to bust the cache when needed.
- The primary goal is to avoid re-downloading Python tools and their dependencies from PyPI on every workflow run.
- An existing issue requests `setup-uv` to default to caching rather than purging wheels.

## Our Commentary

I've seen so many CI pipelines struggle with dependency resolution and caching. This `UV_EXCLUDE_NEWER` trick for `uvx` is genuinely smart. It's a simple, effective pattern that I think could be adapted for other package managers too. We're always looking for ways to shave seconds off builds, and this is a solid win for developer experience.
