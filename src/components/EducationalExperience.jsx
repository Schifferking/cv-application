function EducationalExperience() {
  return (
    <section>
      <h2>Educational Experience</h2>
      <label>
        * School name <input type="text" className="school-name" required />
        <span className="school-name-error"></span>
      </label>
      <label>
        * Study title <input type="text" className="study-title" required />
        <span className="study-title-error"></span>
      </label>
      <label>
        * Study date <input type="date" className="study-date" required />
        <span className="study-date-error"></span>
      </label>
    </section>
  );
}

// Move this to app.jsx
/* function GetTodayDate() {
  return new Date().toISOString().substr(0, 10);
} */

export default EducationalExperience;
