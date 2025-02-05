import { add } from "@/utils/utils";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toEqual(0);
  });

  it("should return number itself for single number", () => {
    expect(add("10")).toEqual(10);
  });

  it("should return sum of two comma seperated numbers", () => {
    expect(add("10,40")).toEqual(50);
  });

  it("should able to handle any amount of numbers and return there sum", () => {
    expect(add("10,20,30")).toBe(60);
  });

  it("should able to handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n100")).toBe(103);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//}\n9}90}10")).toBe(109);
    expect(add("//|\n9|90")).toBe(99);
  });

  it("should throw error negative numbers not allowed", () => {
    expect(() => add("-1,2,3")).toThrow("Negative numbers not allowed -1");
    expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed -1,-3");
  });
});
