---
layout: article
title: 'pnpm 12.9: WebContainers, Per-Registry Concurrency, and Security Fixes'
description: 'pnpm v12.9 introduces automatic WebAssembly usage in StackBlitz WebContainers, per-registry network concurrency settings, and a crucial security fix for `pnpm login`.'
photo: 'https://opengraph.githubassets.com/cd29fd5543df96c27757c6c9ceef5870644fe5f84155f5033828ed54e9825308/pnpm/pnpm/releases/tag/v12.9.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.9.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 2
---

## Summary & Key Takeaways

- pnpm now automatically uses WebAssembly in StackBlitz WebContainers for faster installations.
- A new `networkConcurrency` setting allows per-registry control over concurrent requests.
- Every installed project is now recorded in the store's projects directory.
- A security fix addresses credential forwarding during `pnpm login` redirects.

## Our Commentary

I'm genuinely excited about the WebContainers integration; that's a huge win for instant dev environments. The `networkConcurrency` per-registry is a subtle but powerful DX improvement for complex setups. We've all been there, waiting on a slow internal registry. And a security fix is always welcome. Good stuff.
