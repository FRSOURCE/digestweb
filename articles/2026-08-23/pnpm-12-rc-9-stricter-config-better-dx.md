---
layout: article
title: 'pnpm 12 RC 9: Stricter Config, Better DX'
description: 'The latest Release Candidate for pnpm 12 introduces stricter workspace configuration validation and enhanced `pnpm config` output for improved developer experience.'
photo: 'https://opengraph.githubassets.com/6eb74436a40ae2bc8080671da0f2f4add426eb6745baa62a3780e1eba14203b4/pnpm/pnpm/releases/tag/v12.0.0-rc.9'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.9
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Unrecognized workspace settings are now reported as errors or warnings.
- Misspelled configuration keys are suggested with the closest real setting names.
- Global build approvals have been added to the tool.
- Recursive global outdated checks are now supported.
- `pnpm config get` and `list` commands show settings under their documented names.
- The `registries` setting now displays merged sources and built-in routes.
- Deprecated internal spellings for `update` and `audit` are no longer listed.
- The complete resolved catalog set is now visible via `catalogs`.

## Our Commentary

We're always a little wary of RCs, but pnpm 12 is shaping up nicely. The stricter config validation is a huge win for DX. How many times have I misspelled a setting and spent an hour debugging? Too many. And finally, `pnpm config get registries` actually shows something useful. It's the small things, really. But these small things add up to a much smoother workflow. I'm genuinely excited for the stable release.
