import { beforeAll, describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CVForm from "./CVForm";

describe("CVForm component", () => {
  const setup = () => {
    const onSubmit = vi.fn();
    const setFormData = vi.fn();
    const user = userEvent.setup();
    const utils = render(
      <CVForm onSubmit={onSubmit} setFormData={setFormData} />
    );

    const findErrorMessage = async (regularExpression) => {
      const errorMessage = await utils.findByText(regularExpression);
      return errorMessage;
    };

    const clickSubmitButton = async () =>
      await user.click(screen.getByRole("button", { name: /submit cv/i }));
    return {
      ...utils,
      onSubmit,
      setFormData,
      user,
      clickSubmitButton,
      findErrorMessage,
    };
  };

  const setupWithNoValue = async (regularExpression) => {
    const utils = setup();
    await utils.clickSubmitButton();
    const errorMessage = await utils.findErrorMessage(regularExpression);
    return { ...utils, errorMessage };
  };

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

  it('renders "First name is required" message when trying to submit empty value in first name input', async () => {
    const { errorMessage } = await setupWithNoValue(/first name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "First name must be a valid name" message when trying to submit with invalid first name input', async () => {
    const utils = setup();
    const firstNameInput = screen.getByRole("textbox", {
      name: /\* first name/i,
    });
    await utils.user.type(firstNameInput, " ");
    await utils.clickSubmitButton();
    const firstNameErrorMessage = await screen.findByText(
      /first name must be a valid name/i
    );

    expect(firstNameErrorMessage).toBeInTheDocument();
  });

  it('renders "Last name is required" message when trying to submit empty value in last name input', async () => {
    const { errorMessage } = await setupWithNoValue(/last name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Last name must be a valid name" message when trying to submit with invalid last name input', async () => {
    const { user, clickSubmitButton } = setup();
    const lastNameInput = screen.getByRole("textbox", {
      name: /\* last name/i,
    });
    await user.type(lastNameInput, " ");
    await clickSubmitButton();
    const lastNameErrorMessage = await screen.findByText(
      /last name must be a valid name/i
    );

    expect(lastNameErrorMessage).toBeInTheDocument();
  });

  it('renders "Email is required" message when trying to submit empty value in email input', async () => {
    const { errorMessage } = await setupWithNoValue(/email is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Email must be a valid name" message when trying to submit with invalid email input', async () => {
    const { clickSubmitButton, user } = setup();
    const emailInput = screen.getByRole("textbox", {
      name: /\* email/i,
    });
    await clickSubmitButton();
    await user.type(emailInput, "1");
    const emailErrorMessage = await screen.findByText(
      /email address must be a valid email address/i
    );

    expect(emailErrorMessage).toBeInTheDocument();
  });

  it('renders "Phone number is required" message when trying to submit empty value in phone number input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /phone number is required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Phone number must be similar to +123-234-345-6789" message when trying to submit with invalid phone number input', async () => {
    const { clickSubmitButton, user } = setup();
    const phoneNumberInput = screen.getByRole("textbox", {
      name: /\* phone number/i,
    });
    await clickSubmitButton();
    await user.type(phoneNumberInput, "1");
    const phoneNumberErrorMessage = await screen.findByText(
      /phone number must be similar to \+123-234-345-6789/i
    );

    expect(phoneNumberErrorMessage).toBeInTheDocument();
  });

  it('renders "School name is required" message when trying to submit empty value in school name input', async () => {
    const { errorMessage } = await setupWithNoValue(/school name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Study title is required" message when trying to submit empty value in study title input', async () => {
    const { errorMessage } = await setupWithNoValue(/study title is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Study date is required" message when trying to submit empty value in study date input', async () => {
    const { errorMessage } = await setupWithNoValue(/study date is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Study date must be until today" message when trying to submit a future date', async () => {
    const today = new Date("2025-11-20");
    vi.setSystemTime(today);

    const { clickSubmitButton, user } = setup();
    const studyDateInput = screen.getByLabelText(/\* study date/i);
    await user.type(studyDateInput, "2025-11-21");
    await clickSubmitButton();
    const studyDateErrorMessage = await screen.findByText(
      /study date must be until today/i
    );

    expect(studyDateErrorMessage).toBeInTheDocument();
  });

  it('renders "Company name is required" message when trying to submit empty value in company name input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /company name is required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Position title is required" message when trying to submit empty value in position title input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /position title is required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Responsibilities are required" message when trying to submit empty value in responsibilities input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /responsibilities are required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Job start date is required" message when trying to submit empty value in job start date input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /job start date is required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Job end date is required" message when trying to submit empty value in job end date input', async () => {
    const { errorMessage } = await setupWithNoValue(
      /job end date is required/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders "Job start date must be until today" message when trying to submit a future date', async () => {
    const today = new Date("2025-11-20");
    vi.setSystemTime(today);

    const { clickSubmitButton, user } = setup();
    const jobStartDateInput = screen.getByLabelText(/\* job start date/i);
    const jobEndDateInput = screen.getByLabelText(/\* job end date/i);
    await user.type(jobStartDateInput, "2025-11-21");
    await user.type(jobEndDateInput, "2025-11-22");
    await clickSubmitButton();
    const jobStartDateErrorMessage = await screen.findByText(
      /job start date must be until today/i
    );

    expect(jobStartDateErrorMessage).toBeInTheDocument();
  });

  it('renders "Job end date must be until today" message when trying to submit a future date', async () => {
    const today = new Date("2025-11-20");
    vi.setSystemTime(today);

    const { clickSubmitButton, user } = setup();
    const jobStartDateInput = screen.getByLabelText(/\* job start date/i);
    const jobEndDateInput = screen.getByLabelText(/\* job end date/i);
    await user.type(jobStartDateInput, "2025-11-19");
    await user.type(jobEndDateInput, "2025-11-22");
    await clickSubmitButton();
    const jobEndDateErrorMessage = await screen.findByText(
      /job end date must be until today/i
    );

    expect(jobEndDateErrorMessage).toBeInTheDocument();
  });

  it('renders "Job start date must be earlier than job end date" message when trying to submit an invalid date', async () => {
    const today = new Date("2025-11-20");
    vi.setSystemTime(today);

    const { clickSubmitButton, user } = setup();
    const jobStartDateInput = screen.getByLabelText(/\* job start date/i);
    const jobEndDateInput = screen.getByLabelText(/\* job end date/i);
    await user.type(jobStartDateInput, "2025-11-19");
    await user.type(jobEndDateInput, "2025-11-18");
    await clickSubmitButton();
    const jobStartDateErrorMessage = await screen.findByText(
      /job start date must be earlier than job end date/i
    );

    expect(jobStartDateErrorMessage).toBeInTheDocument();
  });
});
