import { useState } from "react";
import "./App.css";
import CVForm from "./components/CVForm";
import CV from "./components/CV";

function GetFormattedDate(date = new Date()) {
  return date.toISOString().substring(0, 10);
}

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  schoolName: "",
  studyTitle: "",
  studyDate: GetFormattedDate(),
  companyName: "",
  positionTitle: "",
  responsibilities: "",
  jobStartDate: GetFormattedDate(),
  jobEndDate: GetFormattedDate(),
};

function App() {
  const [isDataValid, setIsDataValid] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <h1>CV application</h1>
      {isDataValid ? (
        <CV setIsDataValid={setIsDataValid} formData={formData}></CV>
      ) : (
        <CVForm
          setIsDataValid={setIsDataValid}
          formData={formData}
          setFormData={setFormData}
        ></CVForm>
      )}
    </>
  );
}

export default App;
