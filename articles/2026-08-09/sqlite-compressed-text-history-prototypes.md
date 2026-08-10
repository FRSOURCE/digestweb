---
layout: article
title: 'SQLite Compressed Text History Prototypes'
description: 'Simon Willison explores a novel idea for efficiently storing text revision histories in SQLite databases by compressing a JSON array of all prior versions using zlib or zstd, discussing the concept with GPT-Live.'
photo: 'https://picsum.photos/id/478/800/450'
original_url: https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [research, tooling, performance, ai]
significance: 2
---

## Summary & Key Takeaways

The article proposes storing text revision histories in SQLite efficiently.
The idea involves compressing a JSON array of all prior text versions.
Zlib or ZSTD compression is suggested for high redundancy reduction.
The history would be stored in a BLOB column within the database.
The author discussed this prototype idea using ChatGPT's GPT-Live voice mode.

## Our Commentary

This is a really clever idea. Storing revision history efficiently is a common problem, and the simple elegance of compressing a JSON array of strings makes a lot of sense. I love that he bounced the idea off GPT-Live; it's a great example of using AI as a sounding board for technical concepts.
