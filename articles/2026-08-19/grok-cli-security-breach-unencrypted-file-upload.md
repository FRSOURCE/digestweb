---
layout: article
title: 'Grok CLI Caught Uploading All Local Files Unencrypted to Cloud'
description: 'Developers discovered the Grok CLI tool was uploading all local files, including sensitive .env and git history, unencrypted to a GCP bucket.'
photo: 'https://storage.ghost.io/c/39/f8/39f85cc7-8637-40fc-a57c-f45754453717/content/images/2026/08/aa1de119-a4fd-4a85-b20a-bdc73c9db948_1182x842.webp'
original_url: https://blog.pragmaticengineer.com/grolk-cli-uploaded-all-your-files-to-the-cloud/
source_name: 'The Pragmatic Engineer'
source_author: 'Gergely Orosz'
tags: [tooling, dx, security, ai]
significance: 4
---

## Summary & Key Takeaways

• The Grok CLI tool was found to be uploading all local files to a GCP bucket.
• Sensitive data, including `.env` files and git history, was pushed unencrypted.
• This constitutes a severe security and privacy breach for developers using the tool.
• The initial response from SpaceX reportedly blamed the developers for the issue.

## Our Commentary

This is absolutely horrifying. Unencrypted uploads of _all_ local files, including `.env` and git history? That's a catastrophic failure of trust and security. And then to blame the developers? I genuinely don't know how a company recovers from something like this. We need to be incredibly vigilant about the tools we integrate into our workflows. This is a stark reminder that "convenience" can come at an unimaginable cost.
