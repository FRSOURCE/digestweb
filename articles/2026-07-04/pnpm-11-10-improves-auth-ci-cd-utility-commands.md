---
layout: article
title: 'pnpm 11.10 Improves Auth for CI/CD, Adds New Utility Commands'
description: "pnpm's latest minor release, 11.10, introduces a structured `_auth` setting for registry authentication, designed to enhance security and reliability in CI/CD pipelines. It also adds convenient `issues` and `prefix` commands."
photo: 'https://opengraph.githubassets.com/f292a963e8a1e26bf55ddb47c332fae4621e41b6473645922feafbdf0609c01e/pnpm/pnpm/releases/tag/v11.10.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.10.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx, build-tools]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.10 introduces a new `_auth` setting for configuring registry authentication.
- This setting uses a structured, URL-keyed value, improving security and clarity.
- It addresses limitations with environment variables in CI/CD, especially for GitHub Actions.
- The `_auth` value is honored only from global config or environment variables, not project files.
- New `issues` command opens the package's bug tracker URL in the browser.
- New `prefix` command prints the current package prefix directory.

## Our Commentary

This `_auth` change is a quiet but significant win for anyone wrestling with CI/CD secrets. I've definitely hit those silent environment variable drops before, and it's infuriating. The explicit URL-keyed structure feels much more robust. It's a good example of a build tool focusing on developer experience beyond just speed. The new commands are nice quality-of-life additions, but the auth fix is where the real value is. We appreciate the attention to detail here.
