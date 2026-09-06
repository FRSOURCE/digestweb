---
layout: article
title: "The Perils of Rewriting Systems from Scratch: A Developer's Lament"
description: 'Simon Willison shares his candid thoughts on why rewriting software systems from scratch rarely works as intended. He argues that it often results in two incomplete systems and persistent technical debt, rather than a clean slate.'
photo: 'https://picsum.photos/id/308/800/450'
original_url: https://simonwillison.net/2026/Sep/6/theres-no-limit-to-how-bad-code-can-get/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [dx, tooling, research]
significance: 2
---

## Summary & Key Takeaways

• Simon Willison discusses the common failure of "rewrite from scratch" projects.
• He argues that the old system often remains a moving target, requiring ongoing changes.
• Developers on the old system lose incentive to maintain quality.
• New system teams often underestimate the complexity of the existing system.
• Projects frequently launch with only a subset of the old system's features.
• This often results in two partially functional systems in production.
• The new system risks abandonment if patience runs out.

## Our Commentary

Oh, this one hits home. I've seen this play out so many times. The allure of a greenfield rewrite is powerful, but the reality is almost always messier. "You now have TWO systems in production" – that line is brutal because it's so true. It makes me think about the psychological aspect of technical debt and how hard it is to escape. Maybe incremental refactoring, no matter how slow, is the only sane path.
