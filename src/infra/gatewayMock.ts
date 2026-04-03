import { GatewayChargeRequest, GatewayChargeResult } from "../domain/types";

const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const gatewayMock = {
  async charge(request: GatewayChargeRequest): Promise<GatewayChargeResult> {
    const delayMs = randomInt(30, 150);
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    return {
      paymentId: `pay_${request.customerId}_${Date.now()}`,
      status: "CONFIRMED"
    };
  }
};
