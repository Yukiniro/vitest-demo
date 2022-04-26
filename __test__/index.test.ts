import { test, expect, describe, vi } from "vitest";
import { isUndefined, sleep } from "bittydash";
import { Person, sayHello, sum } from "../src";

const helloText = "Hello World";
const market = {
  buy(subject: string): string {
    return subject;
  },
};

test("hello world", () => {
  expect(sayHello()).toBe(helloText);
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

  test("toContain", () => {
    expect([1, 2, 3]).toContain(1);
    expect(helloText).toContain("World");
  });

  test("toContainEqual", () => {
    expect([1, 2, [1, 2]]).toContainEqual([1, 2]);
  });

  test("toHaveLength", () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect("Yukiro").toHaveLength(6);
  });

  test("toHaveProperty", () => {
    expect(me).toHaveProperty("name");
    expect(me).toHaveProperty("age", 18);
  });

  test("toMatch", () => {
    expect(helloText).toMatch("Hello");
    expect(helloText).toMatch(/\s/g);
  });

  test("toMatchObject", () => {
    expect({
      item: {
        type: "xx",
        count: 10,
      },
      isActive: true,
      type: "obj1",
    }).toMatchObject({
      item: {
        type: "xx",
        count: 10,
      },
      isActive: true,
    });

    expect([1, 2, { name: "Yuki" }]).toMatchObject([1, 2, { name: "Yuki" }]);
  });

  // ⚠️：必须将断言代码放在一个函数中，否则无法捕获错误
  test("toThrowError", () => {
    expect(() =>
      sum("1" as unknown as number, null as unknown as number)
    ).toThrowError("Argument must be number");
  });

  test("toHaveBeenCalled", () => {
    const buySpy = vi.spyOn(market, "buy");
    expect(buySpy).not.toHaveBeenCalled();
    market.buy("fish");
    expect(buySpy).toHaveBeenCalled();
  });

  test("toHaveBeenCalledTimes", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveBeenCalledTimes(2);
  });

  test("toHaveBeenCalledWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    expect(buySpy).toHaveBeenCalledWith("fish");
  });

  test("toHaveBeenLastCalledWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveBeenLastCalledWith("rice");
  });

  test("toHaveBeenNthCalledWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveBeenNthCalledWith(1, "fish");
  });

  test("toHaveReturned", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    expect(buySpy).toHaveReturned();
  });

  test("toHaveReturnedTimes", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveReturnedTimes(2);
  });

  test("toHaveReturnedWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    expect(buySpy).toHaveReturnedWith("fish");
  });

  test("toHaveLastReturnedWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveLastReturnedWith("rice");
  });

  test("toHaveNthReturnedWith", () => {
    const buySpy = vi.spyOn(market, "buy");
    market.buy("fish");
    market.buy("rice");
    expect(buySpy).toHaveNthReturnedWith(2, "rice");
  });

  const callTimer = async (delay?: any) => {
    if (isUndefined(delay)) {
      throw new Error("Delay must be number");
    } else {
      await sleep(delay);
      return 200;
    }
  };
  test("resolves", async () => {
    await expect(callTimer(100)).resolves.toBe(200);
  });
  test("rejects", async () => {
    await expect(callTimer()).rejects.toThrowError("Delay must be number");
  });

  test("assertions", async () => {
    expect.assertions(2);
    await sleep(10);
    expect(1).toBe(1);
    await sleep(10);
    expect(2).toBe(2);
  });

  test("hasAssertions", async () => {
    expect.hasAssertions();
    await sleep(10);
    expect(1).toBe(1);
  });
});
