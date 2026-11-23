---
layout: article
title: 'pnpm 11.29: Enhanced Security for OTP and Local Dependencies'
description: 'This release focuses heavily on security, stopping OTP reads from config files and rejecting local filesystem dependencies from registry packages.'
photo: 'https://opengraph.githubassets.com/ea24ae55f6d22258555da36cacbd1b68fbb1a0852d46d2ab49700d9ceeef40a5/pnpm/pnpm/releases/tag/v11.29.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.29.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, security, build-tools]
significance: 3
---

## Summary & Key Takeaways

- Stops reading OTP from config files, requiring it via command line or environment variables for security.
- Rejects local filesystem dependencies declared by non-local packages to prevent supply chain attacks.
- Enforces `blockExoticSubdeps` against entries in `pnpm-lock.yaml` more strictly.
- Ensures tarball downloads send registry credentials only over HTTPS or loopback HTTP.
- Adds the `--minimum-release-age` option for release management.

## Our Commentary

Another pnpm release, and again, security is front and center. Rejecting local filesystem dependencies from registry packages is a huge win for supply chain security. It's a necessary hardening step, even if it might break some obscure workflows. I'm glad to see this kind of vigilance; it's a constant battle.
