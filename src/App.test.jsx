import { beforeAll, describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  // with user-event v14, tests that use both click function and vitest's fakeTimers time out
  // this is a workaround. More information here: https://github.com/testing-library/user-event/issues/1115
  beforeAll(() => {
    const _jest = globalThis.jest;

    globalThis.jest = {
      ...globalThis.jest,
      advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
    };

    return () => void (globalThis.jest = _jest);
  });

  it("renders CVForm component when loading page", () => {
    render(<App />);
    const formSubmitButton = screen.getByRole("button");
    expect(formSubmitButton).toBeInTheDocument();
  });

  it("renders CV component when submitting valid data", async () => {
    const user = userEvent.setup();
    const today = new Date("2025-11-28");
    vi.setSystemTime(today);

    render(<App />);
    const submitButton = screen.getByRole("button");
    const firstNameInput = screen.getByRole("textbox", {
      name: /\* first name/i,
    });
    const lastNameInput = screen.getByRole("textbox", {
      name: /\* last name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /\* email/i,
    });
    const phoneNumberInput = screen.getByRole("textbox", {
      name: /\* phone number/i,
    });
    const schoolNameInput = screen.getByRole("textbox", {
      name: /\* school name/i,
    });
    const studyTitleInput = screen.getByRole("textbox", {
      name: /\* study title/i,
    });
    const studyDateInput = screen.getByLabelText(/\* study date/i);
    const companyNameInput = screen.getByRole("textbox", {
      name: /\* company name/i,
    });
    const positionTitleInput = screen.getByRole("textbox", {
      name: /\* position title/i,
    });
    const responsibilitiesInput = screen.getByRole("textbox", {
      name: /\* main responsibilities/i,
    });
    const jobStartDateInput = screen.getByLabelText(/\* job start date/i);
    const jobEndDateInput = screen.getByLabelText(/\* job end date/i);
    await user.type(firstNameInput, "John");
    await user.type(lastNameInput, "Doe");
    await user.type(emailInput, "johndoe@email.com");
    await user.type(phoneNumberInput, "+123-234-345-6789");
    await user.type(schoolNameInput, "Presidio High School");
    await user.type(studyTitleInput, "Journalism degree");
    await user.type(studyDateInput, "2025-05-15");
    await user.type(companyNameInput, "DragonSteel LTD");
    await user.type(positionTitleInput, "PR");
    await user.type(
      responsibilitiesInput,
      "Handle company social media accounts"
    );
    await user.type(jobStartDateInput, "2025-09-14");
    await user.type(jobEndDateInput, "2025-11-14");
    await user.click(submitButton);
    const editSubmitButton = await screen.findByRole("button", {
      name: /edit cv/i,
    });

    expect(editSubmitButton).toBeInTheDocument();
  });

  it("renders CVForm component when trying to submit invalid data", async () => {
    const user = userEvent.setup();

    render(<App />);
    const formSubmitButton = screen.getByRole("button");
    await user.click(formSubmitButton);
    const firstNameErrorMessage = await screen.findByText(
      /First name is required/i
    );

    expect(firstNameErrorMessage).toBeInTheDocument();
  });
});
