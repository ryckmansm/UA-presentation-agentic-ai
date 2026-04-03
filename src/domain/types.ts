export type Currency = "USD";

export interface CheckoutRequest {
  customerId: string;
  subtotal: number;
  couponCode?: string;
  currency: Currency;
}

export interface CheckoutResult {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paymentId: string;
  status: "CONFIRMED" | "PENDING";
}

export interface GatewayChargeRequest {
  customerId: string;
  amount: number;
  currency: Currency;
}

export interface GatewayChargeResult {
  paymentId: string;
  status: "CONFIRMED" | "PENDING";
}
