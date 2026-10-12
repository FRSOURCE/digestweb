---
layout: article
title: 'ttok 1.0 Confirms GPT-5 & GPT-6 Share Tokenizer'
description: "Simon Willison's `ttok` CLI tool reaches 1.0, notably confirming through experimental data that OpenAI's GPT-5 family and GPT-6 models likely share the same tokenizer."
photo: 'https://picsum.photos/id/668/800/450'
original_url: https://simonwillison.net/2026/Oct/9/ttok/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, tooling, research]
significance: 3
---

## Summary & Key Takeaways

- `ttok` CLI tool for token counting has been released as version 1.0.
- The default tokenizer was switched from GPT-4 to the GPT-5/GPT-6 family.
- Experimental data suggests GPT-6 uses the same tokenizer as GPT-5 models.
- All seven GPT models (5.5, 5.6 Sol/Terra/Luna, 6 Astra/Sol/Luna) showed identical token counts on a test corpus.
- This confirms no input-count change for GPT-6 on the tested corpus.

## Our Commentary

This is a genuinely useful piece of detective work! Simon Willison's `ttok` reaching 1.0 is cool, but the real gem here is the experimental confirmation about the GPT-5/6 tokenizer. We've all been wondering. It's the kind of practical, developer-focused insight that cuts through the marketing noise. I appreciate the effort to verify these details, it helps us build more predictable AI applications.
