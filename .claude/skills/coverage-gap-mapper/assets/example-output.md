# Example Output

- Gap location: `src/domain/paymentProcessor.ts` discount boundary at subtotal `100`
- Why it matters: can silently over-discount and reduce revenue
- Proposed test name: `does not apply SAVE10 at exactly 100`
- Minimal assertion set: `expect(calculateDiscount(100, "SAVE10")).toBe(0)`
