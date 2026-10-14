---
layout: article
title: 'Anthropic Reimagines Source Control for Extreme Scale'
description: 'Anthropic details their journey building Scion, a custom Git alternative, to manage over 30,000 code changes daily and 25 million CI checkouts, driven by their rapid AI development.'
photo: 'https://static.simonwillison.net/static/2026/anthropic-merges-per-day.webp'
original_url: https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, research, tooling, dx]
significance: 3
---

## Summary & Key Takeaways

- Anthropic developed a custom source control system, Scion, to replace Git.
- The move was necessitated by an increase to over 30,000 code changes merged daily.
- Their main branch history is nearly 100 GB, with 25 million daily CI checkouts.
- Scion is described as a reinvention of centralized source control.
- A team of seven completed the migration from Git in five months.
- They also built a new code review system called Antique.

## Our Commentary

This is fascinating. Building your own Git alternative because Git can't keep up with your scale? That's a problem most of us can only dream of having. It really highlights the insane velocity at which these AI labs are operating. The idea of a 'reinvention of centralized source control' is almost heretical in the Git era, but for their specific needs, it makes sense. It makes me wonder if we'll see more bespoke tooling emerge as AI development pushes the boundaries of traditional dev practices.
