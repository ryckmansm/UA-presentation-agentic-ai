# Coverage Gap Checklist

1. Branch coverage below 80% in `src/domain` is high priority.
2. Any untested boundary around discounts, taxes, or totals is critical.
3. Any path that can return HTTP 4xx/5xx without tests is high priority.
4. Suggest the smallest test set that covers the most risk.
5. Prefer deterministic tests over timing-based tests.
