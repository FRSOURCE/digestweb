---
layout: article
title: "Claude Code Now Runs on Bun's Rust Port, Boosting Performance"
description: 'Simon Willison confirms that Claude Code has migrated to the Rust-rewritten Bun runtime, resulting in a 10% startup speed increase on Linux.'
photo: 'https://picsum.photos/id/432/800/450'
original_url: https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [bun, rust, ai, release]
significance: 2
---

## Summary & Key Takeaways

- Jarred Sumner announced that Claude Code v2.1.181 and later versions utilize the Rust port of Bun.
- Simon Willison verified this claim by inspecting his local Claude Code installation.
- Evidence includes the presence of "Bun v1.4.0," a version not yet publicly released.
- The binary also contained numerous `.rs` filenames, confirming the Rust implementation.
- The migration resulted in a 10% faster startup time on Linux.
- Despite the performance gain, the change was largely unnoticeable to users, aligning with Bun's "boring is good" philosophy.

## Our Commentary

This is a neat little confirmation. We knew Bun was moving to Rust, but seeing it deployed in a major AI product like Claude Code, and getting a 10% speed bump with "barely anyone noticed," that's just solid engineering. It speaks volumes about Bun's stability and the power of Rust. It's the kind of quiet win that makes me happy.
