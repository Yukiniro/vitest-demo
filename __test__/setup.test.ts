import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";

describe("beforeEach", () => {
  const map = new Map();
  beforeEach(() => {
    map.clear();
  });

  test("test 1", () => {
    map.set("name", "Yuki");
    expect(map.get("name")).toBe("Yuki");
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(false);
  });
});

describe("afterEach", () => {
  const map = new Map();
  map.set("name", "Yuki");
  afterEach(() => {
    map.clear();
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(true);
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(false);
  });
});

describe("beforeAll", () => {
  const map = new Map();
  map.set("name", "Yuki");
  beforeAll(() => {
    map.clear();
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(false);
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(false);
  });
});

describe("afterAll", () => {
  const map = new Map();
  map.set("name", "Yuki");
  afterAll(() => {
    map.clear();
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(true);
  });

  test("test 1", () => {
    expect(map.has("name")).toBe(true);
  });
});
