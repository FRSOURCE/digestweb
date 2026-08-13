---
layout: article
title: "HeyGen's Avatar IV on Google Cloud TPUs: 1.86x Speedup"
description: "HeyGen successfully ported their 18B+ parameter Avatar IV video generation model to Google Cloud's Trillium TPUs, achieving a 1.86x speedup for real-time streaming through custom optimizations."
photo: 'https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini_Generated_Image_r23vqnr23v.2e16d0ba.fill-1200x600.jpg'
original_url: https://developers.googleblog.com/heygen-x-google-cloud-bringing-avatar-iv-to-tpus/
source_name: 'Google Developers Blog – AI'
source_author: ''
tags: [ai, google, performance, research]
significance: 2
---

## Summary & Key Takeaways

- HeyGen ported their Avatar IV video generation model to Google Cloud Trillium TPUs.
- The 18B+ parameter model achieved a 1.86x speedup for real-time streaming.
- Optimizations included pipelining all-to-all collectives and aligning sparse attention block sizes.
- Custom Pallas kernel and compiler optimizations were deployed.
- Rigorous two-tier quality gates ensured pixel-identical or mathematically equivalent outputs.

## Our Commentary

This is the kind of deep-dive I love to see. Optimizing an 18B+ parameter model for a 1.86x speedup on TPUs is no small feat. The details about custom Pallas kernels and compiler optimizations are fascinating. It shows the incredible engineering effort behind pushing the boundaries of AI performance.
