import { describe, it, expect } from "vitest";
import { Queue } from "../queue";

describe("Queue", () => {
  it("should be a function", () => {
    expect(typeof Queue).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => Queue(null as any)).toThrow();
  });
});
