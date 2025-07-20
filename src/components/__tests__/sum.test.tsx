import { sum } from "../sum";

test("sum function should calculate the sum of two numbers ", () => {
  const result = sum(3, 4);

  //Assertion
  
  //passes
  expect(result).toBe(7);

  //fails expect(received).toBe(expected) // Object.is equality Expected: 5 Received: 7
  //   expect(result).toBe(5);
});
