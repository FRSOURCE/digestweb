---
layout: article
title: 'pnpm 11.5 Introduces Hoisting Limits and UI Improvements'
description: "pnpm's latest minor release brings a new `hoistingLimits` setting, significantly improves interactive prompt UI, and addresses several bugs."
photo: 'https://opengraph.githubassets.com/330894abc90847f2857b9a8c77ff925da214e7808cc069287f689ae0ad4a2c28/pnpm/pnpm/releases/tag/v11.5.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.5.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Introduces a new `hoistingLimits` setting for `nodeLinker: hoisted` installs, offering `none`, `workspaces`, or `dependencies` options.
- Replaces `enquirer` with `@inquirer/prompts` for all interactive prompts, enhancing user experience.
- Fixes a scrolling overflow bug in `pnpm update -i` and `pnpm audit --fix -i` for long choice lists.
- Updates interactive prompts across various commands like `pnpm patch`, `pnpm publish`, and `pnpm login`.
- Adds support for Vim-style `j`/`k` keys for navigation in interactive prompts.
- Recognizes staged publishes in the trust scale, treating them as the strongest trust evidence.
- Resolves a bug where pnpm could hang during peer resolution with mutual peer cycles.

## Our Commentary

We're always here for DX improvements, and pnpm delivering better interactive prompts is a win. That `hoistingLimits` setting is a nice touch for fine-tuning dependency management. It's the little things that make a big difference in daily workflow. I'm curious how many users will actually dive into those limits, but having the option is great.
