---
layout: article
title: 'xAI Open-Sources Grok Build After Major User Data Upload Scandal'
description: 'Following severe backlash for uploading user data, xAI has open-sourced its Grok Build CLI tool under an Apache 2.0 license, aiming to restore trust and enhance user privacy with local-first inference options.'
photo: 'https://picsum.photos/id/368/800/450'
original_url: https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, open-source, security, dx]
significance: 4
---

## Summary & Key Takeaways

- xAI open-sourced its Grok Build CLI tool under Apache 2.0 license.
- This follows a major privacy scandal involving unauthorized user data uploads.
- The tool was found to upload entire directories, including sensitive files.
- xAI has disabled data upload and is deleting previously retained data.
- The move aims to regain user trust and ensure complete privacy.
- Users can now run Grok Build fully open-sourced and local-first.
- The codebase is substantial, comprising over 844,000 lines of Rust.

## Our Commentary

This is a wild turn of events. Open-sourcing Grok Build after a privacy scandal of this magnitude is a bold move, and frankly, a necessary one to even begin rebuilding trust. Uploading SSH keys and password databases? That's a catastrophic failure. While we appreciate the open-source release, the damage to trust is immense. It's a stark lesson in the dangers of opaque AI tools and the importance of local-first design.
