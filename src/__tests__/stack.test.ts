import { describe, it, expect } from "vitest";
import { Stack } from "../stack";

describe("Stack", () => {
  it("should be a function", () => {
    expect(typeof Stack).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => Stack(null as any)).toThrow();
  });
});
