---
layout: article
title: 'SQLite Extension: C vs Rust Performance for Number Parsing'
description: 'A detailed comparison of C and Rust for building a SQLite `parse_number()` extension, exploring performance, binary size, and code complexity, with AI assistance.'
photo: 'https://picsum.photos/id/451/800/450'
original_url: https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [research, ai, performance, open-source]
significance: 2
---

## Summary & Key Takeaways

The article investigates building a `parse_number()` SQLite extension in both C and Rust.
Initial Rust implementations (using `Rusqlite` and `sqlite-loadable-rs`) were faster than the C equivalent using `strtod`.
AI (Claude Opus 5.5) was used to generate initial code and refine the C implementation.
A custom C parsing function was developed to significantly outperform both the standard C `strtod` and the Rust versions.
The optimized C extension achieved a net cost of 18-19 ns per row over 2 million rows for mixed and decimal data.
Binary size for the C extension was 14 KB, while Rust versions were 298-321 KB.
The final C implementation demonstrated superior performance and a much smaller binary footprint.
The experiment highlights the trade-offs between language choice, performance, and development tooling.

## Our Commentary

This is a fascinating dive into the weeds of performance optimization. We often assume Rust is just 'faster' than C for certain tasks, but this shows how much nuance there is. I'm genuinely surprised by how much ground a hand-tuned C function can make up, even against Rust's optimized libraries. And using Claude as a co-pilot for this kind of low-level exploration? That's a workflow I hadn't fully considered. It makes me wonder how many other 'settled' performance debates could be reopened with AI assistance. The binary size difference is also pretty stark; 14KB vs 300KB is a huge gap for an extension.
