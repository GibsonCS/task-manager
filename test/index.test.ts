import { describe, test, expect } from "@jest/globals";
import example from "../src/index";

describe("index", () => {
  test("asd", () => {
    const result = example();
    const expected = "1";
    expect(result).toStrictEqual(expected);
  });
});
