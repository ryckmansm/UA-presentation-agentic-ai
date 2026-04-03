param(
  [string]$TargetUrl = "http://localhost:3000"
)

Write-Host "[playwright-cli] Target URL: $TargetUrl"

if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
  throw "npx is required but was not found in PATH."
}

# Keep command simple for classroom demos; use --trace=on for richer diagnostics.
npx playwright test tests/ui/checkout.ui-bugs.spec.ts --project=chromium --reporter=line --trace=on
