import { sum } from "../sum";

test("Sum function should calculate sum of two number", () => {
  const result = sum(3, 4);
  // asertion
  expect(result).toBe(7);
});
