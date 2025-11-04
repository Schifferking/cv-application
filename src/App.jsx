import { useState } from "react";
import CV from "./components/CV";
import CVForm from "./components/CVForm";
import "./App.css";

function App() {
  const [isDataValid, setIsDataValid] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    setIsDataValid(true);
  };

  return (
    <>
      <h1>CV application</h1>
      {isDataValid ? (
        <CV formData={formData} setIsDataValid={setIsDataValid}></CV>
      ) : (
        <CVForm onSubmit={handleSubmit} setFormData={setFormData}></CVForm>
      )}
    </>
  );
}

export default App;
