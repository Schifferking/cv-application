import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CV from "./CV";

describe("CV component", () => {
  it("calls handleClick once when clicked", async () => {
    const setIsDataValid = vi.fn();
    const formData = {};
    render(<CV setIsDataValid={setIsDataValid} formData={formData} />);
    const editBtn = screen.getByText("Edit CV");

    await userEvent.click(editBtn);

    expect(setIsDataValid).toHaveBeenCalledOnce();
  });

  it("does not call handleClick when not clicked", () => {
    const setIsDataValid = vi.fn();
    const formData = {};

    render(<CV setIsDataValid={setIsDataValid} formData={formData} />);

    expect(setIsDataValid).not.toHaveBeenCalledOnce();
  });
});
