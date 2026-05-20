---
layout: article
title: 'Structured Output That Remembers Across Turns in TanStack Chat'
description: "TanStack's `useChat` now preserves structured output across multiple turns, ensuring history is maintained for complex AI conversations."
photo: 'https://picsum.photos/id/535/800/450'
original_url: https://tanstack.com/blog/multi-turn-structured-output
source_name: 'TanStack Blog'
source_author: ''
tags: [frameworks, ai, release, dx]
significance: 2
---

## Summary & Key Takeaways

- `useChat` now retains structured output across multiple turns.
- Each assistant turn carries its own typed `StructuredOutputPart` on its `UIMessage`.
- This change ensures chat history is preserved by default.
- The schema generic threads down to individual message parts.

## Our Commentary

This is a smart, practical update. Losing context in multi-turn structured chats was a real headache, forcing developers to build their own workarounds. TanStack stepping in to handle this at the framework level is a huge win for DX. It feels like a small but mighty improvement.
