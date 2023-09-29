const validateField = (args) => {
  const { fieldPattern, fieldValue, span, errorMessage } = args;
  if (!fieldPattern.test(fieldValue)) {
    span.innerText = errorMessage;
    return false;
  }

  span.innerText = "";
  return true;
};

const getNamePattern = () => {
  return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
};

const getPhonePattern = () => {
  return new RegExp(
    "^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$"
  );
};

const getWordsPattern = () => {
  return /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
};

const getResponsibilitiesPattern = () => {
  return /^[a-zA-Z0-9 ]+$/;
};

const getPattern = (className) => {
  switch (className) {
    case "first-name":
    case "last-name":
      return getNamePattern();
    case "phone-number":
      return getPhonePattern();
    case "responsibilities":
      return getResponsibilitiesPattern();
    default:
      return getWordsPattern();
  }
};

const getFieldArguments = (className) => {
  const fieldPattern = getPattern(className);
  const fieldValue = document.querySelector(`.${className}`).value;
  const span = document.querySelector(`.${className}-error`);
  const errorMessage = `Please enter a valid ${className.split("-").join(" ")}`;
  return { fieldPattern, fieldValue, span, errorMessage };
};

const validateFirstName = () => {
  const args = getFieldArguments("first-name");
  return validateField(args);
};

const validateLastName = () => {
  const args = getFieldArguments("last-name");
  return validateField(args);
};

// to-do: give more examples about correct formats
const validatePhoneNumber = () => {
  const args = getFieldArguments("phone-number");
  return validateField({
    ...args,
    errorMessage: `${args.errorMessage} in the format: +123-234-345-6789`,
  });
};

const validateGeneralInformation = () => {
  if (!validateFirstName()) {
    return false;
  } else if (!validateLastName()) {
    return false;
  } else if (!validatePhoneNumber()) {
    return false;
  }
  return true;
};

const validateSchoolName = () => {
  const args = getFieldArguments("school-name");
  return validateField(args);
};

const validateStudyTitle = () => {
  const args = getFieldArguments("study-title");
  return validateField(args);
};

const isDateLaterThanOtherDate = (date, otherDate) => {
  return date > otherDate;
};

const getDateFieldArguments = (className) => {
  const dateValue = new Date(document.querySelector(`.${className}`).value);
  const span = document.querySelector(`.${className}-error`);
  return { dateValue, span };
};

const validateDateField = (className) => {
  const { dateValue, span } = getDateFieldArguments(className);
  const today = new Date();
  if (isDateLaterThanOtherDate(dateValue, today)) {
    span.innerText = "Date musn't be later than today";
    return false;
  }
  span.innerText = "";
  return true;
};

const validateStudyDate = () => {
  return validateDateField("study-date");
};

const validateEducationalExperience = () => {
  if (!validateSchoolName()) {
    return false;
  } else if (!validateStudyTitle()) {
    return false;
  } else if (!validateStudyDate()) {
    return false;
  }
  return true;
};

const validateCompanyName = () => {
  const args = getFieldArguments("company-name");
  return validateField(args);
};

const validatePositionTitle = () => {
  const args = getFieldArguments("position-title");
  return validateField(args);
};

const validateResponsibilities = () => {
  const args = getFieldArguments("responsibilities");
  return validateField({
    ...args,
    errorMessage: "Please enter valid responsibilities",
  });
};

const validateJobStartDate = () => {
  return validateDateField("job-start-date");
};

const validateJobEndDate = () => {
  return validateDateField("job-end-date");
};

const areDatesEqual = (date, otherDate) => {
  return date.getTime() === otherDate.getTime();
};

const validateJobDates = () => {
  if (!validateJobStartDate()) {
    return false;
  } else if (!validateJobEndDate()) {
    return false;
  }
  const startDate = getDateFieldArguments("job-start-date");
  const endDate = getDateFieldArguments("job-end-date");
  if (isDateLaterThanOtherDate(startDate.dateValue, endDate.dateValue)) {
    startDate.span.innerText =
      "Job start date shouldn't be later than job end date";
    return false;
  } else if (areDatesEqual(startDate.dateValue, endDate.dateValue)) {
    endDate.span.innerText = "Both dates can't be equal";
    return false;
  }
  startDate.span = "";
  return true;
};

const validatePracticalExperience = () => {
  if (!validateCompanyName()) {
    return false;
  } else if (!validatePositionTitle()) {
    return false;
  } else if (!validateResponsibilities()) {
    return false;
  } else if (!validateJobDates()) {
    return false;
  }
  return true;
};

const validateForm = () => {
  if (!validateGeneralInformation()) {
    return false;
  } else if (!validateEducationalExperience()) {
    return false;
  } else if (!validatePracticalExperience()) {
    return false;
  }
  return true;
};

export default validateForm;
