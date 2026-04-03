---
name: flaky-test-triage
description: Diagnose intermittent test failures and propose deterministic fixes without masking bugs with arbitrary sleeps.
argument-hint: "[test-path-or-suite]"
---

Triage flaky tests for $ARGUMENTS.

Workflow:
1. Identify non-determinism sources: timing, random data, shared state, order dependence.
2. Reproduce strategy: suggest repeated runs and isolate suspect test.
3. Propose deterministic fix in priority order:
   - control time and randomness
   - await explicit signals
   - isolate shared state
   - adjust timeout only when justified
4. Return a patch-ready recommendation.

Rules:
- Do not propose adding sleeps as first-line fix.
- Explain why fix reduces flake probability.
- Include a validation command (`jest <test> --runInBand --repeatTests 20` equivalent strategy).

See [triage-checklist.md](references/triage-checklist.md).
