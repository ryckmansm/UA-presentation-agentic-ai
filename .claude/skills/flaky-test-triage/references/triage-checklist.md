# Flaky Triage Checklist

1. Is there random delay or random data generation?
2. Are async operations awaited to completion?
3. Is test state isolated between runs?
4. Does test depend on execution order?
5. Can fake timers or deterministic mocks replace real time?
