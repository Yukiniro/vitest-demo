import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { fireEvent, waitFor } from "@testing-library/dom";
import { test, expect, afterEach, describe, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import Button from "../src/button";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

expect.extend(matchers);
afterEach(cleanup);

describe("Button", () => {
  test("test text", () => {
    const { rerender } = render(<Button text="button 1" />);
    expect(screen.getByRole("button")).toHaveTextContent("button 1");
    rerender(<Button text="button 2" />);
    expect(screen.getByRole("button")).toHaveTextContent("button 2");
  });

  test("test onClick", async () => {
    const onClickSpy = vi.fn(() => void 0);
    render(<Button text="button" onClick={onClickSpy} />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
