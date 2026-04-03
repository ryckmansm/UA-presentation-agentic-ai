import express, { Request, Response } from "express";
import path from "node:path";
import { processCheckout } from "../domain/paymentProcessor";
import { CheckoutRequest } from "../domain/types";

export function createApp() {
  const app = express();
  const publicDir = path.resolve(process.cwd(), "public");

  app.use(express.static(publicDir));
  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });

  app.get("/health", (_req: Request, res: Response) => {
    res.json({ ok: true, service: "payment-workflow" });
  });

  app.post("/checkout", async (req: Request, res: Response) => {
    const body = req.body as Partial<CheckoutRequest>;

    if (!body.customerId || typeof body.subtotal !== "number" || !body.currency) {
      return res.status(400).json({ error: "Invalid checkout payload" });
    }

    const result = await processCheckout({
      customerId: body.customerId,
      subtotal: body.subtotal,
      couponCode: body.couponCode,
      currency: body.currency
    });

    return res.status(201).json(result);
  });

  return app;
}
