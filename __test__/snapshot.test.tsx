import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import Button from "../src/button";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

expect.extend(matchers);

test("Button snapshot", () => {
  render(<Button text="button" />);
  expect(screen.getByRole("button")).toMatchSnapshot();
});
