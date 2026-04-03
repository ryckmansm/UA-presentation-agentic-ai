import request from "supertest";
import { createApp } from "../../src/api/app";

describe("checkout flow", () => {
  it("eventually returns a confirmed payment id", async () => {
    const app = createApp();

    const pendingRequest = request(app)
      .post("/checkout")
      .send({
        customerId: "student-1",
        subtotal: 110,
        couponCode: "SAVE10",
        currency: "USD"
      });

    // Intentional flake: request latency is random (30-150ms), timeout is often too strict.
    const response = await Promise.race([
      pendingRequest,
      new Promise<never>((_resolve, reject) => {
        setTimeout(() => reject(new Error("checkout request timed out")), 40);
      })
    ]);

    expect(response.status).toBe(201);
    expect(response.body.status).toBe("CONFIRMED");
    expect(response.body.paymentId).toContain("pay_student-1_");
  });
});
