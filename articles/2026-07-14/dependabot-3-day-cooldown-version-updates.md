---
layout: article
title: 'Dependabot Introduces 3-Day Cooldown for Version Updates'
description: "GitHub's Dependabot now defaults to a three-day cooldown period before opening version update pull requests, improving stability and reducing noise."
photo: 'https://picsum.photos/id/338/800/450'
original_url: https://simonwillison.net/2026/Jul/14/github-changeling/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [github, dx, release]
significance: 1
---

## Summary & Key Takeaways

- Dependabot now waits three days after a new release before creating a version update pull request.
- This cooldown period is now enabled by default for all repositories.
- The feature aims to prevent premature updates to unstable or broken new releases.
- It requires no additional configuration from developers.

## Our Commentary

This is a small but genuinely smart move. How many times have we seen Dependabot PRs for a broken new version, only to have to revert or wait for a patch? This simple cooldown should save a lot of headaches. I'm surprised it wasn't a default sooner.
