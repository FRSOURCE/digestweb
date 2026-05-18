---
layout: article
title: 'TanStack Suffers Sophisticated npm Supply-Chain Attack'
description: 'TanStack details a complex supply-chain compromise affecting 42 of its npm packages, involving GitHub Actions cache poisoning and OIDC token extraction.'
photo: 'https://tanstack.com/assets/og-C0HGjoLl.png'
original_url: https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
source_name: 'TanStack Blog'
source_author: ''
tags: [tooling, dx, open-source]
significance: 4
---

## Summary & Key Takeaways

- The TanStack team published a postmortem detailing a sophisticated supply-chain attack that affected 42 of their npm packages.
- The attacker exploited a `pull_request_target` Pwn Request and GitHub Actions cache poisoning across fork↔base trust boundaries.
- OIDC tokens were extracted from runner memory, enabling the publication of 84 malicious versions of `@tanstack/*` packages.
- The incident highlights critical vulnerabilities in CI/CD pipelines and the npm ecosystem.

## Our Commentary

This is genuinely unsettling. A supply-chain attack of this sophistication, chaining multiple vulnerabilities, is a stark reminder of the fragility of our software dependencies. The fact that OIDC tokens were extracted from runner memory is particularly alarming; it shows attackers are constantly finding new ways to bypass security measures. We rely so heavily on these open-source packages, and incidents like this erode trust. It's a wake-up call for every project maintaining an npm presence to review their CI/CD security, especially around GitHub Actions and token management. The complexity of the attack vectors makes it clear that defending against these threats requires constant vigilance and deep technical understanding.
