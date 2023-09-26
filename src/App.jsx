import "./App.css";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import validateForm from "./form-validation";

function App() {
  return (
    <>
      <h1>CV application</h1>
      <form onSubmit={validateForm}>
        <GeneralInformation></GeneralInformation>
        <EducationalExperience></EducationalExperience>
        <PracticalExperience></PracticalExperience>
        <button type="submit">Submit CV</button>
      </form>
    </>
  );
}

// to-do: add function that generates html elements with user info

export default App;
