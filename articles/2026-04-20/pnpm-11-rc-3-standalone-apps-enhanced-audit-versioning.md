---
layout: article
title: 'pnpm 11 RC 3: Standalone Apps, Enhanced Audit & Versioning'
description: "pnpm 11 RC 3 introduces `pnpm pack-app` for creating standalone executables, refines `pnpm audit --fix` with interactive mode and better override ranges, and expands `pnpm version` to match npm's behavior."
photo: 'https://opengraph.githubassets.com/c5f749d3189dcb5b57a30ec9b212e1ff9971fdf2fa6079911c1a9982319fe361/pnpm/pnpm/releases/tag/v11.0.0-rc.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.3
source_name: 'pnpm Releases'
source_author: ''
tags: [pnpm, release, tooling, nodejs]
significance: 3
---

## Summary & Key Takeaways

- pnpm 11 RC 3 introduces `pnpm pack-app`, a new command to package CommonJS entry files into standalone executables for various platforms using Node.js Single Executable Applications API.
- The `pnpm audit --fix` command now respects the `auditLevel` setting, supports an interactive mode (`--interactive`), and generates caret ranges (`^X.Y.Z`) for overrides instead of open-ended ones.
- The `pnpm version` command has been fixed and expanded to align with npm's behavior, accepting explicit semver versions and recognizing flags like `--no-commit-hooks`, `--no-git-tag-version`, `--sign-git-tag`, and `--message`.
- It also creates a git commit and annotated tag for version bumps within a git repository, with customizable tag prefixes.

## Our Commentary

pnpm 11 RC 3 is looking like a solid major release. The `pnpm pack-app` command is a game-changer for distributing Node.js applications as single executables, which is a feature I've personally wanted for a long time. The improvements to `pnpm audit --fix` are also crucial for security and developer control. It's great to see pnpm not just focusing on speed but also on developer experience and robust tooling.
