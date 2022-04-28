import { test, expect } from "vitest";

// passed
test("toBeNull", () => {
  expect(null).toBeNull();
});

// passed
test("toBeNull", () => {
  expect(true).not.toBeNull();
});

// passed
test("toBeTypeOf", () => {
  expect("Hello").toBeTypeOf("string");
  expect(100).toBeTypeOf("number");
});

// passed
test("toEqual", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
  const person = { name: "Yukiro", age: 18 };
  expect(person).toEqual({ name: "Yukiro", age: 18 });
});

test.skip("skip test", () => {
  // do something
});
