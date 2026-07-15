---
layout: article
title: 'Deno 2.9.3 Released: New CLI Features & HTTP Client Options'
description: "Deno's latest minor release, 2.9.3, brings new CLI flags like `--no-save` and `--min-dep-age`, adds AArch64 Windows compile support, and enhances HTTP client configuration. It also includes a wide array of bug fixes."
photo: 'https://opengraph.githubassets.com/f96e6b24915a8c248c3c121b86d61cdf21230de45bd413217753b2679796c70a/denoland/deno/releases/tag/v2.9.3'
original_url: https://github.com/denoland/deno/releases/tag/v2.9.3
source_name: 'Deno Releases'
source_author: ''
tags: [deno, release, tooling, nodejs]
significance: 2
---

## Summary & Key Takeaways

- Introduces `deno add --no-save` and `--save-optional` CLI flags.
- Adds `--min-dep-age` alias for managing dependency versions.
- Supports AArch64-pc-windows-msvc as a new compile target.
- Allows `http2MaxHeaderListSize` configuration for `Deno.createHttpClient`.
- Includes numerous bug fixes across core, extensions, and Node.js compatibility.

## Our Commentary

Deno keeps chugging along with consistent updates. The `--no-save` and `--save-optional` flags are nice quality-of-life additions for CLI users. It's good to see continued focus on Windows support and HTTP client configurability. The sheer volume of fixes in this minor release is impressive, showing active development.
