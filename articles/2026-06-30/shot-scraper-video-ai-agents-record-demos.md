---
layout: article
title: 'Shot-Scraper Video: AI Agents Can Now Record Their Own Demos'
description: "Simon Willison's `shot-scraper` 1.10 introduces a new `video` command, allowing AI agents to record detailed video demonstrations of their interactions with web applications."
photo: 'https://static.simonwillison.net/static/2026/shot-scraper-video-card.jpg'
original_url: https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, dx, testing]
significance: 3
---

## Summary & Key Takeaways

- `shot-scraper` 1.10 introduces a new `video` command.
- This command enables AI agents to record video demos of their work.
- It uses a `storyboard.yml` file to define routines against web applications.
- Playwright is leveraged for the video recording functionality.
- The feature aims to make AI agent outputs more understandable and verifiable.
- An example demonstrates recording a bulk CSV insert into Datasette.

## Our Commentary

This is brilliant. One of the biggest challenges with AI agents is understanding _what_ they did and _how_. Video demos are an incredibly intuitive way to debug and verify agent behavior. Simon Willison is consistently building tools that address real pain points in the AI development workflow. This feels like a crucial step towards more transparent and trustworthy agents.
