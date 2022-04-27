/**
 * @vitest-environment happy-dom
 */

import { Window } from "happy-dom";
import { test, expect } from "vitest";
import { getByText } from "@testing-library/dom";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

function sayHello(dom: Element) {
  dom.innerHTML = "hello world";
}

const window = new Window();
const document = window.document;
document.body.innerHTML = '<div class="container"></div>';

const container = document.querySelector(".container");
sayHello(container as unknown as Element);
test("sayHello toBe", () => {
  expect(container.innerHTML).toBe("hello world");
});

test("sayHello toContainHTML", () => {
  // toContainHTML 由 @testing-library/jest-dom/matchers 提供
  expect(container).toContainHTML("hello world");
});

test("sayHello getByText", () => {
  // getByText 由 @testing-library/dom 提供
  expect(
    getByText(container as unknown as HTMLElement, "hello world")
  ).not.toBeEmptyDOMElement();
});
