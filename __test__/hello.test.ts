import { describe } from "vitest";
import { test, expect } from "vitest";
import { Person, sayHello, sum } from "../src";

test("hello world", () => {
  expect(sayHello()).toBe("Hello World");
});

test.todo("todo test");

describe("sum", () => {
  test("sum default", () => {
    expect(sum(1, 1)).not.toBe(3);
    expect(sum(1, 2)).toBe(3);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 2);
  });
});

describe("test api", () => {
  test("toBeDefined", () => {
    expect(0).toBeDefined();
  });

  test("toBeUndefined", () => {
    expect(undefined).toBeUndefined();
  });

  // each中的会在回调中进行参数的解构
  test.each([1, {}, "null", [[]]])("toBeTruthy", (value) => {
    expect(value).toBeTruthy();
  });

  test.each(["", 0, null])("toBeFalsy", (value) => {
    expect(value).toBeFalsy();
  });

  test("toBeNull", () => {
    expect(null).toBeNull();
  });

  test("toBeNaN", () => {
    expect(NaN).toBeNaN();
  });

  test("toBeTypeOf", () => {
    expect("Hello").toBeTypeOf("string");
    expect(100).toBeTypeOf("number");
  });

  const me = new Person("Yukiro", 18);
  test("toBeInstanceOf", () => {
    expect(me).toBeInstanceOf(Person);
  });

  test("toBeGreaterThan", () => {
    expect(100).toBeGreaterThan(10);
  });

  test("toBeGreaterThanOrEqual", () => {
    expect(100).toBeGreaterThanOrEqual(100);
  });

  test("toBeLessThan", () => {
    expect(1).toBeLessThan(10);
  });

  test("toBeLessThanOrEqual", () => {
    expect(10).toBeLessThanOrEqual(10);
  });

  test("toEqual", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect(me).toEqual({ name: "Yukiro", age: 18 });
  });

  test("toStrictEqual", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect([1, 2, 3]).not.toStrictEqual([, 1, 2, 3]);

    expect(me).toEqual({ name: "Yukiro", age: 18 });
    expect(me).not.toStrictEqual({ name: "Yukiro", age: 18 });
  });
});
