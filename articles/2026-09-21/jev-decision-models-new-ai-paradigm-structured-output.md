---
layout: article
title: 'Jev: A New Paradigm for AI with "Decision Models" Outputting Structured Data'
description: 'Simon Willison introduces Jev, a "System One" or "Decision Model" from TypeSafe AI. Unlike traditional LLMs, Jev takes text input but returns structured numerical outputs, offering a fast, cheap, and precise approach to AI-driven decision-making.'
photo: 'https://picsum.photos/id/605/800/450'
original_url: https://simonwillison.net/2026/Sep/21/jev/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, research, dx]
significance: 4
---

## Summary & Key Takeaways

- Jev is a new category of AI model, dubbed "Decision Models" or "System One models."
- It accepts text inputs but outputs structured data like floating-point numbers.
- Outputs include confidence scores for yes/no questions, choices, and ratings.
- The model is noted for being extremely fast and significantly cheaper than traditional LLMs.
- Jev charges only for input tokens, with output being free.
- It allows for asking multiple questions about a single "state" object.
- This represents a potential shift in how AI is used for structured decision-making.
- Simon Willison highlights its potential impact on AI application design.

## Our Commentary

Okay, Jev. This is genuinely fascinating. An LLM that doesn't output text but _numbers_ and _confidence scores_? That's a game-changer for so many applications where we're currently trying to parse structured data _out_ of unstructured text. The speed and cost are just icing on the cake. I've been waiting for something like this, a model specifically designed for structured decision-making rather than just generation. This feels like a real step forward in making AI more directly actionable and less about prompt engineering for specific output formats. I'm excited to see how this evolves.
