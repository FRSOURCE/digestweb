---
layout: article
title: 'commit-rewriter 0.1: Clean Up Your Git Commit Messages'
description: "Simon Willison releases `commit-rewriter`, a new web app to easily edit Git commit messages. It's particularly useful for removing AI agent cruft or private issue IDs before publishing."
photo: 'https://static.simonwillison/static/2026/commit-rewriter.webp'
original_url: https://simonwillison.net/2026/Sep/14/commit-rewriter/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, open-source, ai]
significance: 2
---

## Summary & Key Takeaways

`commit-rewriter` is a new web application for editing Git commit messages.
It helps clean up "coding agent cruft" and private issue IDs.
The tool can be run locally via `uvx commit-rewriter`.
It creates a timestamped branch before rewriting commits for safety.
Edits apply to all commits from the first modified one to the most recent.
This utility addresses a specific need for developers working with AI-assisted code.

## Our Commentary

Simon Willison always delivers these incredibly practical tools. `commit-rewriter` feels like a direct response to the current AI coding boom. We've all seen those messy, verbose AI-generated commits. This is exactly the kind of small, focused utility that makes a developer's life easier. I appreciate the safety net of the timestamped branch; that's a thoughtful touch.
