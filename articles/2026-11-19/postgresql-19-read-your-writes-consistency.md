---
layout: article
title: 'PostgreSQL 19 Ships with Read-Your-Writes Consistency'
description: 'PostgreSQL 19 introduces `WAIT FOR LSN` for read-your-writes consistency on standbys, a crucial feature for distributed applications, following a delay due to AI-reported vulnerabilities.'
photo: 'https://picsum.photos/id/222/800/450'
original_url: https://simonwillison.net/2026/Nov/19/postgresql-19/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [release, tooling, performance, ai]
significance: 3
---

## Summary & Key Takeaways

- PostgreSQL 19 has been released, delayed by "AI-reported vulnerability apocalypse."
- A key new feature is "read-your-writes" consistency using `WAIT FOR LSN`.
- This allows standby replicas to wait for a specific log sequence number before querying.
- The feature is vital for applications requiring immediate consistency after a write on the primary.
- It offers a robust solution similar to patterns seen in large-scale systems like Wikipedia.

## Our Commentary

PostgreSQL 19 is here, and that `WAIT FOR LSN` feature is a big deal for anyone wrestling with distributed database consistency. We've all seen the pain points of eventual consistency, and this offers a much-needed tool. The "AI-reported vulnerability apocalypse" mention is a bit chilling, though. It makes me wonder what kind of new security challenges we're facing when AI starts finding flaws faster than humans can patch them.
