import { gatewayMock } from "../infra/gatewayMock";
import { CheckoutRequest, CheckoutResult } from "./types";

const TAX_RATE = 0.2;

export function calculateDiscount(subtotal: number, couponCode?: string): number {
  if (!couponCode) {
    return 0;
  }

  if (couponCode === "SAVE10") {
    // Intentional bug for demo: boundary should be > 100, not >= 100.
    if (subtotal >= 100) {
      return subtotal * 0.1;
    }

    if (subtotal >= 50) {
      return subtotal * 0.05;
    }
  }

  return 0;
}

export function calculateTax(taxableAmount: number): number {
  return Number((taxableAmount * TAX_RATE).toFixed(2));
}

export async function processCheckout(request: CheckoutRequest): Promise<CheckoutResult> {
  const discount = Number(calculateDiscount(request.subtotal, request.couponCode).toFixed(2));
  const taxableAmount = request.subtotal - discount;
  const tax = calculateTax(taxableAmount);
  const total = Number((taxableAmount + tax).toFixed(2));

  const gatewayResult = await gatewayMock.charge({
    customerId: request.customerId,
    amount: total,
    currency: request.currency
  });

  return {
    subtotal: request.subtotal,
    discount,
    tax,
    total,
    paymentId: gatewayResult.paymentId,
    status: gatewayResult.status
  };
}
