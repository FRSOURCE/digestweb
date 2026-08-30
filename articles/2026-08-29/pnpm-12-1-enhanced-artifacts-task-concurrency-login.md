---
layout: article
title: 'pnpm 12.1: Enhanced Artifacts, Task Concurrency, and Login Flow'
description: 'pnpm 12.1 introduces verified remote build artifact persistence, per-task concurrency limits for workspaces, and improved login token management.'
photo: 'https://opengraph.githubassets.com/c60af119df2b8d6be6b8f2276da716abf61ba521380e92f8f637b9eae69d960c/pnpm/pnpm/releases/tag/v12.1.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.1.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, performance, dx, release]
significance: 2
---

## Summary & Key Takeaways

- pnpm login and adduser now record tokens in the global config.yaml under _auth, with scope routing.
- Verified remote build artifacts are persisted in the shared store with signed origin metadata.
- Later installs reverify artifacts against current trust, policy, platform, and source before reuse.
- Completed recursive tasks are now persisted, allowing --resume-from to skip passed work.
- Workspace install, rebuild, pack, publish, stage, and lifecycle work starts as soon as dependencies finish.
- Per-task concurrency limits can be set in pnpm-workspace.yaml for workspace tasks.
- The sideEffectsCache now declares how a package's build output is reused, saved, and shared remotely.

## Our Commentary

pnpm keeps pushing the envelope on package management, and this release is no exception. The verified remote build artifacts and per-task concurrency are genuinely exciting for large monorepos. We've all been there, waiting for a massive workspace build to finish, and these features promise some real relief. I'm particularly intrigued by the sideEffectsCache declaration; it feels like a step towards truly intelligent build systems. It's a solid release, making the developer experience smoother and more robust.
