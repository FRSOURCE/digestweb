---
layout: article
title: 'pnpm 11.1.3 Enhances Package Security with New Resolution Policies'
description: 'pnpm 11.1.3 introduces robust security features, re-validating lockfile entries against `minimumReleaseAge` and `trustPolicy` to prevent silent downgrades or immature package installs. It offers both loose and strict modes for handling policy violations, improving supply chain security.'
photo: 'https://opengraph.githubassets.com/685aab31302ef905204231eae33367b28c38314a69137cb0c57b7b30757c80cc/pnpm/pnpm/releases/tag/v11.1.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.1.3
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, tooling, release, security]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.1.3 introduces new security policies for `pnpm-lock.yaml` entries.
- It re-validates entries against `minimumReleaseAge` and `trustPolicy: 'no-downgrade'` before fetching tarballs.
- Violating entries will abort the install with specific error messages.
- Verification results are cached for faster subsequent installs.
- The `minimumReleaseAgeStrict` setting determines how immature versions are handled.
- Loose mode (default) auto-adds immature picks to `minimumReleaseAgeExclude` and proceeds.
- Strict mode in interactive terminals prompts the user to approve or decline immature picks.
- Strict mode in CI environments aborts with an error listing all offending entries.

## Our Commentary

This is a really smart move by the pnpm team. Supply chain attacks are a constant threat, and adding these kinds of proactive checks directly into the package manager is a huge win for developer security. I particularly like the `minimumReleaseAge` policy – it's a practical way to mitigate risks from newly published, potentially malicious, or unstable packages. The flexibility between loose and strict modes also shows a good understanding of different team needs. This feels like a feature that other package managers should seriously consider adopting.
