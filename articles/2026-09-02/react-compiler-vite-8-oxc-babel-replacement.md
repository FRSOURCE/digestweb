---
layout: article
title: 'React Compiler Lands in Vite 8 via Oxc, Ditching Babel'
description: "VoidZero's August recap reveals a major update: React Compiler is now supported in Vite 8 through Oxc, eliminating the need for Babel and boosting performance."
photo: 'https://voidzero.dev/covers/update-2026-aug.jpg'
original_url: https://voidzero.dev/posts/whats-new-aug-2026
source_name: 'VoidZero Blog'
source_author: ''
tags: [react, vite, build-tools, compiler]
significance: 3
---

## Summary & Key Takeaways

- The React Compiler is now available in Vite 8, powered by Oxc.
- This integration allows memoizing components and hooks at build time.
- It eliminates the need for manual `useMemo` and `useCallback` calls.
- `oxc-transform-react` replaces Babel in the Vite pipeline for React Compiler.
- Preliminary benchmarks show significant performance gains over Babel.
- The update promises fewer re-renders and improved developer experience.

## Our Commentary

This is huge! React Compiler support in Vite 8 via Oxc, finally ditching Babel for that step. I've been waiting for this kind of integration. The benchmark numbers are compelling, and the idea of getting automatic memoization without manual `useMemo` and `useCallback` is a dream for DX. This feels like a real step forward for the React ecosystem.
