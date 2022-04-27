/**
 * @vitest-environment happy-dom
 */

import { Window } from "happy-dom";
import { test, expect } from "vitest";
// import * as matchers from '@testing-library/jest-dom/matchers';

// expect.extend(matchers);

function sayHello(dom: Element) {
  dom.innerHTML = "hello world";
}

const window = new Window();
const document = window.document;
document.body.innerHTML = '<div class="container"></div>';

test("sayHello", () => {
  const container = document.querySelector(".container");
  sayHello(container as unknown as Element);
  expect(container.innerHTML).toBe("hello world");
});
