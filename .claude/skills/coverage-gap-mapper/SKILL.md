---
name: coverage-gap-mapper
description: Find the highest-impact untested branches and propose the smallest set of tests to increase confidence.
argument-hint: "[optional-path-or-module]"
---

Run a coverage-driven gap analysis for $ARGUMENTS.

Workflow:
1. Run coverage (`npm run test:coverage`) unless a fresh report already exists.
2. Identify low branch coverage in business logic first, then API validation paths.
3. For each top gap, propose one concrete test with exact input and expected output.
4. Rank recommendations by risk: critical money flow, boundary math, async behavior, then formatting-only paths.
5. Return output in this format:
   - Gap location
   - Why it matters
   - Proposed test name
   - Minimal assertion set

Rules:
- Favor branch coverage over line coverage.
- Keep recommendation list to max 5 tests.
- Do not modify files unless explicitly asked.

See [checklist.md](references/checklist.md) for ranking rules and [example-output.md](assets/example-output.md) for expected formatting.
