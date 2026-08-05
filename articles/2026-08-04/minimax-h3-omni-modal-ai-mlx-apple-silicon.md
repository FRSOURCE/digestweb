---
layout: article
title: 'MiniMax-H3 Omni-Modal AI Ported to MLX for Apple Silicon'
description: 'Simon Willison demonstrates running MiniMax-H3, an omni-modal generative AI system, on Apple Silicon using an MLX port. The article includes a personal test of video generation.'
photo: 'https://static.simonwillison.net/static/2026/skunk.jpg'
original_url: https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, generative-ai, research, tooling]
significance: 3
---

## Summary & Key Takeaways

- MiniMax-H3 is a new general-purpose, omni-modal generative system.
- It accepts text, images, audio, and video inputs.
- The system can generate up to 15-second video clips with audio.
- A Python package ports MiniMax-H3 to MLX for Apple Silicon.
- Simon Willison successfully ran the model on an M5 Max MacBook Pro.
- The local video generation process took approximately 45 minutes.
- The generated video was impressive, though audio quality varied without specific prompts.

## Our Commentary

This is exactly the kind of hands-on exploration we love to see. Getting a cutting-edge omni-modal model like MiniMax-H3 running locally on Apple Silicon is a big win for accessibility. The 115GB download and 45-minute generation time are stark reminders of the computational demands, but the results are genuinely impressive. I'm always fascinated by how these models handle complex prompts.
