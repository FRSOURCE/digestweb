---
layout: article
title: 'Claude Sonnet 5: A Deep Dive into Features, API, and Hidden Costs'
description: 'Simon Willison dissects Claude Sonnet 5, revealing its performance, API changes, and a critical analysis of its new tokenizer, which effectively increases costs despite advertised pricing.'
photo: 'https://static.simonwillison.net/static/2026/sonnet-5-pelican.png'
original_url: https://simonwillison.net/2026/Jun/30/claude-sonnet-5/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, anthropic, llm, research]
significance: 3
---

## Summary & Key Takeaways

- Claude Sonnet 5 has been released, offering performance close to Opus 4.8 at lower advertised prices.
- Key API changes include the removal of `temperature`, `top_p`, `top_k` sampling parameters.
- It features a 1 million token context window and 128,000 maximum output tokens.
- Adaptive thinking is now on by default, with an option to disable it.
- A new tokenizer effectively increases token count by ~30% for English, leading to higher actual costs.
- Simon Willison's analysis provides detailed token count comparisons across languages and code.

## Our Commentary

Simon Willison always cuts through the marketing fluff, and this analysis of Claude Sonnet 5 is no exception. The "effective 30% price increase" due to the tokenizer change is a huge detail that many might miss. It's a stark reminder to always read the fine print with these models. I appreciate the transparency in his testing. This kind of critical review is essential for the AI community.
