const { same } = require("../../js/algorithms/frequency-counter");

describe("Frequency Counter", () => {
  test("should return true if the second array contains the squares of the first array with the same frequencies", () => {
    expect(same([2, 1, 4], [1, 4, 16])).toBe(true);
  });
});
