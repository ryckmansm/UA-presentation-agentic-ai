---
name: unit-test-generator
description: Generate focused unit tests for a specific function, emphasizing boundary and failure cases over happy paths.
argument-hint: <file-or-function>
disable-model-invocation: true
---

Generate unit tests for $ARGUMENTS.

Workflow:
1. Inspect function behavior and identify boundaries, invalid inputs, and business invariants.
2. Produce concise Jest tests in the existing style.
3. Prefer table-driven patterns when they reduce duplication.
4. Include at least one regression test tied to a realistic failure mode.
5. If confidence is low, state assumptions explicitly before writing tests.

Output requirements:
- Add tests only in `tests/unit`.
- Keep each test focused on one behavior.
- Use clear test names in present tense.

Do not change production code unless asked.
Use [test-template.md](assets/test-template.md) for naming and structure.
