---
layout: article
title: 'pnpm 12.12.1: OIDC Auth & New `tool:` Protocol for Runtimes'
description: 'pnpm adds OIDC authentication for secure CI/CD workflows and introduces a `tool:` protocol to manage Node.js, Bun, Deno, and Yarn directly.'
photo: 'https://opengraph.githubassets.com/ea31638c9393e197675c9417b0baf9ff32cc3d5dc89f305e7202eebb9eda6c04/pnpm/pnpm/releases/tag/v12.12.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.12.1
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx, open-source]
significance: 3
---

## Summary & Key Takeaways

OIDC authentication is now supported for `pnpm dist-tag` commands.
`pnpm publish` validates `NPM_ID_TOKEN` `aud` claims against the target registry.
The new `tool:` protocol allows pnpm to manage Node.js, Bun, Deno, and Yarn installations.
`pnpm add bun@tool:1.3.0` is an example of the new runtime management syntax.
The `runtime:` protocol remains supported as an alias for `tool:`.
Lockfiles written with `runtime:` are compatible with `tool:` in `package.json`.

## Our Commentary

OIDC support in pnpm is a solid win for CI/CD security. We've seen too many token leaks. But the `tool:` protocol? That's the real kicker here. pnpm managing its own runtimes like Node, Bun, Deno, and Yarn directly is a fascinating move. I'm genuinely curious how this plays out. It feels like a step towards a more self-contained, opinionated environment, which could be amazing for consistency or a bit too much control. We'll be watching this closely.
