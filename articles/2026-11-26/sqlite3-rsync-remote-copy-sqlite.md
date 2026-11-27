---
layout: article
title: 'sqlite3_rsync: Efficient Remote Copy Tool for SQLite'
description: 'Discover `sqlite3_rsync`, a powerful SQLite tool for remote database synchronization over SSH, eliminating the need for full local copies.'
photo: 'https://picsum.photos/id/490/800/450'
original_url: https://simonwillison.net/2026/Nov/26/sqlite3-rsync/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, database, performance, open-source]
significance: 3
---

## Summary & Key Takeaways

- `sqlite3_rsync` is a new SQLite tool for remote database copying.
- It allows synchronizing SQLite databases over SSH.
- The tool avoids creating a full local duplicate, saving disk space.
- This is crucial for small instances with limited disk capacity.
- It works similarly to `rsync`, sending hashes and only differing page content.
- The tool was introduced as experimental in SQLite 3.47.0 and enhanced in 3.50.0.

## Our Commentary

This is genuinely exciting for anyone working with SQLite, especially on constrained systems. The ability to `rsync` a database over SSH without needing a full local copy first is a game-changer for backups and replication. I've definitely run into situations where disk space was a bottleneck for database operations, and this solves that elegantly. It's a clever approach to a common problem.
