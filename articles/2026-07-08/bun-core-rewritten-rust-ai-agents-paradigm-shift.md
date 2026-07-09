---
layout: article
title: "Bun's Core Rewritten in Rust with AI Agents: A Paradigm Shift"
description: "Jarred Sumner details Bun's ambitious rewrite from Zig to Rust, driven by memory safety concerns and powered by sophisticated AI agents."
photo: 'https://picsum.photos/id/756/800/450'
original_url: https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [bun, tooling, ai, research]
significance: 4
---

## Summary & Key Takeaways

- Bun's core has been rewritten from Zig to Rust due to persistent memory management bugs.
- Rust's memory safety features were a primary driver for the language switch.
- The rewrite was largely facilitated by advanced AI agents (Mythos/Fable).
- Bun's existing TypeScript test suite served as a crucial conformance suite for the AI-driven port.
- This project challenges the long-held "never rewrite" adage in software development.
- The AI agents performed dynamic workflows, trial runs, and adversarial review.
- The initial experiment with AI agents quickly yielded a high percentage of passing tests.

## Our Commentary

This is wild. I genuinely don't know how to feel about agents churning away at 3am while nobody's watching, rewriting a core runtime. It's a massive technical feat, sure, but also a bit unsettling. We've always said "never rewrite," and now AI just... does it? The implications for DX and project longevity are immense, but I'm still processing the "how."
