---
name: playwright-cli
description: Use Playwright CLI to quickly find UI bugs, broken flows, and console errors in the local web app.
argument-hint: "[target-url-or-path]"
disable-model-invocation: true
---

Use Playwright CLI to investigate UI bugs for $ARGUMENTS.

Workflow:
1. Ensure the app is running locally (`npm run build && npm start`).
2. Default target is `http://localhost:3000` if no argument is provided.
3. Run the quick UI bug sweep script at scripts/run-ui-bug-sweep.ps1.
4. Report findings grouped by severity:
   - Broken user flow
   - JavaScript/console errors
   - Accessibility/interaction defects
   - Visual/state mismatch
5. For each finding, include:
   - Repro steps
   - Expected vs actual behavior
   - Suggested minimal fix location

Rules:
- Prefer deterministic reproduction steps.
- Do not claim a bug without evidence from logs, trace, or screenshot.
- If no bug is found, explicitly state coverage limits and residual risk.

See [playwright-commands.md](references/playwright-commands.md) for command recipes and [bug-report-template.md](assets/bug-report-template.md) for output format.
