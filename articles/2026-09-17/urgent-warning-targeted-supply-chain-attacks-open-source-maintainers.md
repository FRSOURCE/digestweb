---
layout: article
title: 'Urgent Warning: Targeted Supply Chain Attacks on Open-Source Maintainers'
description: 'A critical alert details ongoing, sophisticated attacks targeting prominent open-source maintainers to inject malware into popular packages.'
photo: 'https://picsum.photos/id/982/800/450'
original_url: https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [open-source, tooling, security, dx]
significance: 3
---

## Summary & Key Takeaways

- An ongoing campaign targets prominent open-source maintainers, specifically Rustaceans.
- Attackers use video calls as a vector to trick targets into installing malware or executing commands.
- This method was successfully used in a supply chain attack against the `array-ref` crate.
- The vulnerability lies in the human network of package publishers.
- Dependency cooldowns are suggested as a defense mechanism.

## Our Commentary

This is genuinely unsettling. The idea of social engineering through a seemingly legitimate video call for a job or project is insidious. It's a stark reminder that our open-source dependencies aren't just code; they're maintained by people, and people are attack vectors. We talk about supply chain security, but this is a whole new level of personal targeting. I'm left wondering what practical steps we can take beyond "dependency cooldowns." This feels like a problem without an easy answer.
