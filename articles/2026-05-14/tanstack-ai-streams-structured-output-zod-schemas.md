---
layout: article
title: 'TanStack AI Streams Structured Output with Zod Schemas'
description: 'TanStack AI now allows developers to stream structured output from LLMs using Zod schemas, providing typed `partial` and `final` results without manual parsing. This simplifies AI application development across various LLM providers.'
photo: 'https://picsum.photos/id/926/800/450'
original_url: https://tanstack.com/blog/streaming-structured-output
source_name: 'TanStack Blog'
source_author: ''
tags: [ai, dx, tooling, open-source]
significance: 3
---

## Summary & Key Takeaways

- TanStack AI has launched a new feature for streaming structured output from Large Language Models (LLMs).
- It allows developers to pass a Zod schema to `useChat` to receive typed `partial` and `final` outputs.
- This eliminates the need for manual `parsePartialJSON` or `onChunk` wiring.
- The feature supports various LLM providers including OpenAI, OpenRouter, Grok, Groq, and Ollama.
- It aims to simplify the development of AI-native applications by providing end-to-end structured streaming.

## Our Commentary

This is a genuinely exciting development for anyone building AI applications. Dealing with partial, unstructured JSON streams from LLMs has been a constant headache, often requiring custom parsing logic and error handling. TanStack AI's approach, leveraging Zod for schema validation and providing typed `partial` and `final` results, feels like a huge leap forward in developer experience. It abstracts away a lot of the boilerplate, letting us focus on the application logic rather than the plumbing. We're seeing more and more frameworks tackle these common AI development challenges, and this is a strong contender for a "must-have" feature.
