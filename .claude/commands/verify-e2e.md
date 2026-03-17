---
description: Run e2e tests and attempt to fix failures, up to 3 fix attempts
---

Run `pnpm test:e2e --reporter=null` to verify the current state of the codebase.

Follow this loop (max 3 fix attempts):

1. Run `pnpm test:e2e --reporter=null`.
2. If all tests pass — report success and stop.
3. If tests fail:
   - Read the failure output carefully.
   - Identify the root cause in source files (NOT in the test files unless the test itself is clearly wrong).
   - Apply the minimal fix needed.
   - Increment the attempt counter and go back to step 1.
4. If tests still fail after the 3rd fix attempt (i.e. the 4th run of `pnpm test:e2e --reporter=null` also fails) — stop immediately and output exactly:

```
Manual test bugs resolution needed
```

Do not attempt any further fixes after that message.
