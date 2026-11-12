---
layout: article
title: 'AWS Releases Official Emulator for Local Service Testing'
description: 'AWS has launched an official emulator, `aws-emulator`, enabling developers to test against local clones of AWS services. Written in Rust by AI agents, it currently requires Docker for macOS and Windows.'
photo: 'https://picsum.photos/id/150/800/450'
original_url: https://simonwillison.net/2026/Nov/11/aws-emulator/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [aws, tooling, dx, ai]
significance: 3
---

## Summary & Key Takeaways

- AWS has released an official emulator for local testing of its services.
- The `aws-emulator` allows developers to run tests without provisioning paid API keys.
- It was developed in Rust by a large number of AI agents.
- The emulator currently requires Docker to run on macOS or Windows.
- This tool significantly improves the developer experience for AWS users.

## Our Commentary

An _official_ AWS emulator? This is huge for DX. No more spinning up resources just to test a lambda or S3 interaction locally. The fact that it was written by "a huge swarm of agents" is... something else. I genuinely don't know how to feel about agents churning away at 3am while nobody's watching, but the output is undeniably useful. I hope they make it a single binary soon, Docker is a bit of a hurdle for quick local tests.
