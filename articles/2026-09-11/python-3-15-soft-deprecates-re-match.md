---
layout: article
title: 'Python 3.15 Soft-Deprecates `re.match()` for Clarity'
description: 'Python 3.15 introduces `re.prefixmatch()` as a clearer alternative to the confusing `re.match()`, which is now soft-deprecated, improving regex usability.'
photo: 'https://picsum.photos/id/956/800/450'
original_url: https://simonwillison.net/2026/Sep/11/soft-deprecating-re-match/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [python, dx, release]
significance: 2
---

## Summary & Key Takeaways

- Python 3.15 is soft-deprecating the `re.match()` function.
- A new, clearer alternative, `re.prefixmatch()`, has been introduced.
- `re.prefixmatch()` explicitly reflects that it anchors at the beginning of the string.
- Developers are often better served by `re.search()` or `re.fullmatch()`.
- Soft deprecation means the API should not be used for new code but won't be removed soon.

## Our Commentary

Oh, `re.match()`. The source of so much confusion for new Pythonistas. I've definitely seen my share of bugs caused by misunderstanding its behavior. Soft-deprecating it and introducing `re.prefixmatch()` is a fantastic move for developer experience. It's a small change, but it cleans up a long-standing footgun. This is how languages evolve gracefully.
