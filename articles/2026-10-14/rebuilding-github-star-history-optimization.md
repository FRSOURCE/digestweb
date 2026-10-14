---
layout: article
title: "Rebuilding GitHub's Star History: From 2,500 to 24 Requests"
description: 'GitHub shares how they optimized their star history API, reducing requests from 2,500 to just 24 by rethinking data access.'
photo: 'https://github.blog/wp-content/uploads/2026/01/generic-github-invertocat-mona-logo.png'
original_url: https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/
source_name: 'GitHub Blog'
source_author: ''
tags: [tooling, performance, dx]
significance: 2
---

## Summary & Key Takeaways

- GitHub optimized its star history API to reduce database load.
- The previous API returned individual stargazers, leading to high request counts.
- The new API provides trends without exposing individual identities.
- This involved significant engineering tradeoffs and architectural changes.
- The goal was to improve performance and reduce resource consumption.

## Our Commentary

This is a solid engineering deep dive. We love seeing how big platforms tackle performance challenges. It's a good reminder that sometimes the best optimization is rethinking the data you actually need to serve. I'm curious about the specific architectural shifts they made.
