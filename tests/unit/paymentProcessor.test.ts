import { calculateDiscount, calculateTax } from "../../src/domain/paymentProcessor";

describe("calculateDiscount", () => {
  it("returns 0 without coupon", () => {
    expect(calculateDiscount(80)).toBe(0);
  });

  it("applies 10% for high value cart", () => {
    expect(calculateDiscount(120, "SAVE10")).toBe(12);
  });

  it("applies 5% for medium value cart", () => {
    expect(calculateDiscount(75, "SAVE10")).toBe(3.75);
  });
});

describe("calculateTax", () => {
  it("calculates rounded tax", () => {
    expect(calculateTax(10.115)).toBe(2.02);
  });
});
