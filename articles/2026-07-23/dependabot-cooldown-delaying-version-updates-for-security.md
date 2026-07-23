---
layout: article
title: 'Dependabot Cooldown: Delaying Version Updates for Security'
description: "GitHub's Dependabot now implements a default three-day cooldown period before issuing version update pull requests, allowing time for security researchers and maintainers to address potential vulnerabilities."
photo: 'https://github.blog/wp-content/uploads/2026/01/generic-security-logo-github-blocks.png?fit=1920%2C1080'
original_url: https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/
source_name: 'GitHub Blog'
source_author: ''
tags: [tooling, security, dx, open-source]
significance: 3
---

## Summary & Key Takeaways

- Dependabot will now wait three days before creating version update pull requests.
- This cooldown period allows maintainers and security researchers to identify and address issues in new releases.
- The change aims to improve supply chain security by preventing vulnerable code from entering projects too quickly.
- It's a new default behavior that impacts all Dependabot users.

## Our Commentary

This is a smart move by GitHub. We've all seen those immediate Dependabot PRs for a new version, only to find out later that it introduced a critical vulnerability. Giving a three-day buffer is a pragmatic approach to supply chain security. It's a small change with potentially huge implications for preventing zero-day exploits from hitting our repos. I think it strikes a good balance between staying updated and staying secure.
