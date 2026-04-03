# Playwright CLI Commands

## One-time setup

```bash
npx playwright install
```

## Run quick bug sweep test

```bash
npx playwright test tests/ui/checkout.ui-bugs.spec.ts --project=chromium --reporter=line
```

## Open HTML report (if generated)

```bash
npx playwright show-report
```

## Useful debug flags

```bash
npx playwright test tests/ui/checkout.ui-bugs.spec.ts --project=chromium --headed
npx playwright test tests/ui/checkout.ui-bugs.spec.ts --project=chromium --trace=on
```
