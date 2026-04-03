import { expect, test } from "@playwright/test";

test.describe("UI bug sweep", () => {
  test("has no console errors on initial load", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Checkout Lab" })).toBeVisible();

    expect(consoleErrors, `Console errors found: ${consoleErrors.join(" | ")}`).toEqual([]);
  });

  test("submits checkout flow and renders JSON", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Customer ID").fill("student-ui-1");
    await page.getByLabel("Subtotal (USD)").fill("120");
    await page.getByLabel("Coupon Code (optional)").fill("SAVE10");
    await page.getByRole("button", { name: "Run Checkout" }).click();

    const result = page.locator("#result");
    await expect(result).toContainText('"statusCode": 201');
    await expect(result).toContainText('"status": "CONFIRMED"');
  });

  test("rejects negative subtotal", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Customer ID").fill("student-ui-2");
    await page.getByLabel("Subtotal (USD)").fill("-10");
    await page.getByRole("button", { name: "Run Checkout" }).click();

    const result = page.locator("#result");
    // Intentional bug probe: backend currently accepts negative subtotal and returns 201.
    await expect(result).toContainText('"statusCode": 400');
  });
});
