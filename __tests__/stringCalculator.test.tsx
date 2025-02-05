import { add } from "@/utils/utils";

//Create a simple String calculator with a method signature:
// ———————————————
// int Add(string numbers)
// ———————————————
// The method can take up to two numbers, separated by commas, and will return their sum.
// for example “” or “1” or “1,2” as inputs.
// (for an empty string it will return 0)

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toEqual(0);
  });
});
