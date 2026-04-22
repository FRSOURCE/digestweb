---
layout: article
title: 'Deno 2.7.13 Enhances Node.js Compatibility with REPL and HTTP Rewrite'
description: 'Deno v2.7.13 introduces the node:repl module and a rewritten node:http implementation for improved Node.js compatibility. This release also includes support for installing from PRs and numerous bug fixes.'
photo: 'https://opengraph.githubassets.com/3d6f624e3eabbd2359a12878594712a22f7b94796e77e671fa8058ff331bc1a9/denoland/deno/releases/tag/v2.7.13'
original_url: https://github.com/denoland/deno/releases/tag/v2.7.13
source_name: 'Deno Releases'
source_author: ''
tags: [deno, nodejs, release, web-platform]
significance: 2
---

## Summary & Key Takeaways

- Deno v2.7.13 has been released, bringing several new features and bug fixes.
- Key new features include the implementation of the `node:repl` module, enhancing Node.js compatibility.
- The `node:http` module has been rewritten using `llhttp` and native `TCPWrap` for better performance and compatibility.
- The release also adds support for installing Deno from a pull request.
- Numerous fixes are included, addressing issues across Node.js compatibility, NAPI, HTTP handling, and more.

## Our Commentary

Deno's continuous efforts to improve Node.js compatibility are always a big deal for us. The `node:repl` module is a fundamental part of the Node.js developer experience, and its inclusion here is a clear signal of Deno's commitment to being a viable alternative. Rewriting `node:http` with native components also suggests a focus on performance and robustness. It's exciting to see Deno mature, steadily closing the gap with Node.js while maintaining its unique advantages.
