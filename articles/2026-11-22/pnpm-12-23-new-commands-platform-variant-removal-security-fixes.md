---
layout: article
title: 'pnpm 12.23: New Commands, Platform Variant Removal, and Security Fixes'
description: 'This release introduces new commands like `pnpm edit` and `pnpm link --hard`, removes platform variants, and includes crucial security updates.'
photo: 'https://opengraph.githubassets.com/b042cb02ed4745118d5e0c4fef867301709d2c24ec807b07a1f791a38b46c965/pnpm/pnpm/releases/tag/v12.23.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.23.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx, build-tools]
significance: 3
---

## Summary & Key Takeaways

- Introduces new commands: `pnpm edit`, `pnpm catalog migrate`, and `pnpm link --hard`.
- Removes platform variants, requiring packages to use `optionalDependencies` for platform-specific builds.
- Enhances security by no longer reading OTP from config files and sending registry credentials only over HTTPS.
- Adds `pnpm publish --new-version` for easier version management during publishing.
- Improves `pnpm pack --json` to preview `package.json` changes before tarball creation.
- Ensures private workspace packages are not listed in `dependencies` of public packages.

## Our Commentary

The removal of platform variants feels like a big one for anyone relying on that. It's a clear push towards a more standardized publishing model, which I appreciate for simplicity, but I can imagine some folks will have a migration headache. The security fixes are always welcome, especially around OTP handling. It's good to see continued hardening.
