# Example Analysis

Failure summary:
- Boundary discount test failed: expected 0, got 10.

Evidence:
- Stack points to `calculateDiscount` boundary assertion.
- Failure occurs at subtotal 100 with `SAVE10`.

Hypotheses:
1. High: comparator at boundary uses `>=` instead of `>`.
2. Medium: test fixture changed expected behavior unintentionally.
3. Low: stale build artifact in CI.

Immediate next steps:
1. Run unit test locally for the boundary case.
2. Inspect comparator logic in discount branch.
3. Add regression test if missing.
