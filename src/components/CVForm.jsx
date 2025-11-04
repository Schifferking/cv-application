import { useForm } from "react-hook-form";
import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import "../styles/cv-form.css";

function CVForm({ onSubmit, setFormData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      studyTitle: "",
      studyDate: "",
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      jobStartDate: "",
      jobEndDate: "",
    },
  });

  const isBefore = (firstDate, secondDate) => {
    return firstDate < secondDate;
  };
  const isStartDateBeforeEndDate = (values) => {
    return isBefore(new Date(values.jobStartDate), new Date(values.jobEndDate));
  };

  const onSubmitForm = (data, event) => {
    event.preventDefault();
    setFormData(data);
    onSubmit();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <GeneralInformation errors={errors} register={register} />
        <EducationalExperience
          errors={errors}
          isBefore={isBefore}
          register={register}
        />
        <PracticalExperience
          errors={errors}
          getValues={getValues}
          isBefore={isBefore}
          isStartDateBeforeEndDate={isStartDateBeforeEndDate}
          register={register}
        />
        <button type="submit">Submit CV</button>
      </form>
    </div>
  );
}

export default CVForm;
