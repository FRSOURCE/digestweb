---
layout: article
title: 'pnpm 12 RC 2: Project-Aware Runtimes & Global Shims'
description: 'This release candidate introduces a major DX improvement, allowing globally installed runtimes like Node.js, Deno, and Bun to automatically follow project-specific versions. It includes authentication for official releases and trust prompts for others.'
photo: 'https://opengraph.githubassets.com/0018cb0c834e779eb620778ac6848683354a7fa6ad53f35cca9ad7462062a9f9/pnpm/pnpm/releases/tag/v12.0.0-rc.2'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.2
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, deno, bun, tooling]
significance: 3
---

## Summary & Key Takeaways

Globally installed runtimes can now automatically match project-defined versions.
The new `globalShims` setting configures which packages get project-aware shims.
Node.js versions are authenticated against release-team signatures.
Untrusted candidates (Deno, Bun, Node.js prereleases) prompt for user trust.
`pnpm dlx` and `pnpm create` no longer fail with `patchedDependencies`.
Startup overhead for project-aware shims has been reduced.
Compatibility for `ng build` and `nuxt build` under global virtual store is improved.
Automatic `packageManager` version switching now works for all registries.

## Our Commentary

This is a genuinely exciting feature. Managing Node.js versions has always been a bit of a pain, especially across different projects. The idea of `pnpm` handling this automatically, with authentication, is a huge win for developer experience. I'm curious how seamless the "trust this project" prompts will feel in practice. It feels like a step towards a more integrated, less fragmented runtime environment.
