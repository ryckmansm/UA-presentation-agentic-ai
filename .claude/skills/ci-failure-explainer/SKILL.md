---
name: ci-failure-explainer
description: Summarize likely CI test failure root causes from logs and changed files, with concrete next debugging steps.
argument-hint: "[path-to-log]"
---

Explain CI failure for $ARGUMENTS.

Workflow:
1. Parse failure signatures from the log: failed suite, assertion diff, stack location.
2. Map likely root causes to recent touched modules.
3. Separate evidence from assumptions.
4. Return the top 3 hypotheses with confidence levels.
5. Provide a short action plan with first command to run locally.

Output format:
- Failure summary
- Evidence
- Hypotheses (high/medium/low confidence)
- Immediate next steps

Use [example-analysis.md](./references/example-analysis.md) as formatting reference.
