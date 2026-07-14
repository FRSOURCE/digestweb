---
layout: article
title: 'Lobste.rs Migrates to SQLite, Sees Major Performance & Cost Gains'
description: "The community site Lobsters has successfully migrated its backend from MariaDB to SQLite, reporting reduced CPU/memory usage and halved VPS costs. This case study highlights SQLite's surprising capabilities for production web applications."
photo: 'https://picsum.photos/id/611/800/450'
original_url: https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, performance, dx, open-source]
significance: 3
---

## Summary & Key Takeaways

- Lobsters, a popular community site, completed its migration from MariaDB to SQLite.
- The migration resulted in significant reductions in CPU and memory usage.
- The site is reportedly snappier, and VPS costs are expected to be halved.
- The primary content database is 3.8GB, with additional databases for cache, queue, and abuse prevention.
- This migration serves as a compelling case study for SQLite's production viability.
- It reinforces the idea that a single server with SQLite can handle substantial workloads in 2026.

## Our Commentary

I love seeing these kinds of real-world migrations. It's easy to get caught up in the hype of distributed systems and complex database setups. But then something like this comes along and reminds us that sometimes, the simplest solution is the best. We often forget how powerful a single, well-optimized server can be. The cost savings alone are enough to make me rethink some of our own architectural choices. This is a win for pragmatism.
