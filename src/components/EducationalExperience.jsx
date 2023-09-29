function EducationalExperience({ formData, setFormData }) {
  return (
    <section>
      <h2>Educational Experience</h2>
      <label>
        * School name{" "}
        <input
          type="text"
          className="school-name"
          onChange={(event) =>
            setFormData({ ...formData, schoolName: event.target.value })
          }
          required
          value={formData.schoolName}
        />
        <span className="school-name-error"></span>
      </label>
      <label>
        * Study title{" "}
        <input
          type="text"
          className="study-title"
          onChange={(event) =>
            setFormData({ ...formData, studyTitle: event.target.value })
          }
          required
          value={formData.studyTitle}
        />
        <span className="study-title-error"></span>
      </label>
      <label>
        * Study date{" "}
        <input
          type="date"
          className="study-date"
          onChange={(event) =>
            setFormData({
              ...formData,
              studyDate: event.target.value,
            })
          }
          required
          value={formData.studyDate}
        />
        <span className="study-date-error"></span>
      </label>
    </section>
  );
}

export default EducationalExperience;
