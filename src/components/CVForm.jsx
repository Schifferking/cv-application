import EducationalExperience from "./EducationalExperience";
import GeneralInformation from "./GeneralInformation";
import PracticalExperience from "./PracticalExperience";
import validateForm from "../form-validation";

function CVForm({ setIsDataValid, formData, setFormData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const result = validateForm();
    if (result) {
      setIsDataValid(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GeneralInformation
          formData={formData}
          setFormData={setFormData}
        ></GeneralInformation>
        <EducationalExperience
          formData={formData}
          setFormData={setFormData}
        ></EducationalExperience>
        <PracticalExperience
          formData={formData}
          setFormData={setFormData}
        ></PracticalExperience>
        <button type="submit">Submit CV</button>
      </form>
    </>
  );
}

export default CVForm;
