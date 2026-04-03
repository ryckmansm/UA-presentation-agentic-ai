---
name: mutation-sanity-checker
description: Validate test strength by applying a few high-value logic mutations and checking which ones survive.
argument-hint: "[file-or-function]"
disable-model-invocation: true
---

Run a lightweight mutation sanity check for $ARGUMENTS.

Workflow:
1. Identify 3-5 likely mutation points in core logic (comparators, constants, boolean conditions).
2. For each mutation, reason whether current tests should fail.
3. If a mutant would survive, propose the minimal additional unit test.
4. Report surviving mutants first, with exact suggested assertions.

Rules:
- Keep runtime short; this is not full mutation framework execution.
- Prioritize business-critical logic over utility formatting.
- Never leave mutated production code in place.

Use [mutant-catalog.md](references/mutant-catalog.md) for candidate mutation types.
