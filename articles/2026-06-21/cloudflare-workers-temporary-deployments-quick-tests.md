---
layout: article
title: 'Cloudflare Workers Get Temporary Deployments for Quick Tests'
description: 'Cloudflare introduces a new `wrangler deploy --temporary` command, allowing developers to deploy Workers for 60 minutes without needing an account. This streamlines testing and ephemeral project creation.'
photo: 'https://picsum.photos/id/526/800/450'
original_url: https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [release, dx, tooling, web-platform]
significance: 2
---

## Summary & Key Takeaways

Cloudflare Workers now support temporary deployments via `npx wrangler deploy --temporary`.
This feature allows deploying a Worker project for 60 minutes without requiring a Cloudflare account.
The primary use case is for quick tests, demos, or ephemeral AI agent tasks.
Users can claim the temporary project to extend its lifespan beyond 60 minutes.
This feature enhances developer experience by removing initial setup friction.

## Our Commentary

This is genuinely cool. We've all been there, needing to quickly test a serverless function or demo a small idea without the overhead of account creation and project setup. Cloudflare just nailed that pain point. The `--temporary` flag for Wrangler is a fantastic DX win. I'm already thinking of a dozen little experiments I could spin up and tear down in minutes. It's a small change, but it feels like a big quality-of-life improvement for anyone dabbling with Workers.
