# Demo Runbook (15-20 minutes)

## 1. Setup (2 minutes)

- Show architecture and file layout.
- Start app and open `http://localhost:3000`.
- Explain two intentional defects:
  - discount boundary bug
  - flaky timeout test

## 2. Coverage Gap Mapper (3 minutes)

Prompt idea:
- `/coverage-gap-mapper src/domain`

Expected takeaway:
- boundary around subtotal 100 is under-tested.

## 3. Unit Test Generator (3 minutes)

Prompt idea:
- `/unit-test-generator src/domain/paymentProcessor.ts calculateDiscount`

Expected takeaway:
- newly added boundary test fails and exposes bug.

## 4. Mutation Sanity Checker (3 minutes)

Prompt idea:
- `/mutation-sanity-checker src/domain/paymentProcessor.ts`

Expected takeaway:
- at least one mutant survives until boundary test is added.

## 5. Flaky Test Triage (3 minutes)

Prompt idea:
- `/flaky-test-triage tests/integration/checkout.flaky.test.ts`

Expected takeaway:
- replace timing race with deterministic async assertion strategy.

## 6. CI Failure Explainer (3 minutes)

Prompt idea:
- `/ci-failure-explainer artifacts/ci/failing-run.log`

Expected takeaway:
- clear evidence-based hypotheses and first local reproduction step.

## 7. Wrap-up (2 minutes)

Optional UI bug segment (3-4 minutes):

Prompt idea:
- `/playwright-cli http://localhost:3000`

Expected takeaway:
- Playwright can quickly surface a failing UI/business rule expectation (`negative subtotal` should be rejected).

## 8. Wrap-up (2 minutes)

Before/after story:
- fewer blind spots in coverage
- bug surfaced by generated tests
- reduced flakiness risk
- faster CI diagnosis
