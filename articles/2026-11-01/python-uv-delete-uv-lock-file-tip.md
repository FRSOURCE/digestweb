---
layout: article
title: 'Python UV: When to Delete Your uv.lock File'
description: 'A quick tip for Python developers using `uv` to resolve dependency errors, especially after upgrading Python versions.'
photo: 'https://picsum.photos/id/757/800/450'
original_url: https://simonwillison.net/2026/Nov/1/delete-uv-lock-first/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx]
significance: 1
---

## Summary & Key Takeaways

- `uv.lock` files can cause Python dependency errors, especially with new Python versions.
- These files pin dependency versions, which can conflict with newer Python wheels.
- Libraries should generally not include `uv.lock` files.
- Deleting `uv.lock` and re-running `uv` commands often resolves build issues.

## Our Commentary

This is a classic "TIL" moment. I've definitely hit similar dependency walls in other ecosystems. It's a good reminder that sometimes the simplest solution is to just nuke the lock file and let the system rebuild. There's something satisfying about that.
