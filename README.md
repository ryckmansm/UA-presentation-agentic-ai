# Payment Workflow Testing Demo

Dummy TypeScript project for a university presentation on agent skills for software testing.

## Goals

- Demonstrate how agent skills improve test quality and debugging speed.
- Show one intentional logic bug and one intentional flaky test.
- Include a lightweight frontend to support UI bug-finding demos.
- Run a 15-20 minute sequence with measurable before/after outcomes.

## Quick Start

```bash
npm install
npm run check
npm run build
npm start
```

Open `http://localhost:3000` to use the checkout UI.

## Project Layout

- `src/domain/paymentProcessor.ts`: discount, tax, and checkout business logic.
- `src/api/app.ts`: minimal HTTP API (`/health`, `/checkout`).
- `public/`: frontend UI for checkout flow and health checks.
- `tests/unit`: baseline unit tests with gaps.
- `tests/integration/checkout.flaky.test.ts`: intentionally flaky async test.
- `tests/ui/checkout.ui-bugs.spec.ts`: Playwright UI bug sweep suite.
- `.claude/skills`: testing-oriented skill pack for the demo.
- `artifacts/ci/failing-run.log`: prepared CI failure sample for log analysis.

## Seeded Issues for Live Demo

1. Boundary logic bug:
   - In `calculateDiscount`, `subtotal >= 100` should be `subtotal > 100`.
2. Flaky test:
   - Integration test races checkout against a strict 40ms timeout while gateway delay is random.

## Suggested Demo Sequence

1. Run `coverage-gap-mapper`.
2. Run `unit-test-generator` on `calculateDiscount`.
3. Run `mutation-sanity-checker`.
4. Run `flaky-test-triage` on checkout integration test.
5. Run `ci-failure-explainer` on `artifacts/ci/failing-run.log`.
6. Run `playwright-cli` to probe UI regressions and interaction bugs.

## Useful Commands

```bash
npm run test
npm run test:coverage
npm run test:all
npm run test:flaky
npm run build
npm start
npm run ui:install
npm run ui:test
```
