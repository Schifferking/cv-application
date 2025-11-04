function EducationalExperience({ errors, isBefore, register }) {
  return (
    <section>
      <h2>Educational Experience</h2>
      <div className="labels-container">
        <label>
          * School name{" "}
          <input
            type="text"
            className="school-name"
            {...register("schoolName", {
              required: "School name is required",
            })}
          />
          {errors.schoolName?.message && (
            <small>{errors.schoolName.message}</small>
          )}
        </label>

        <label>
          * Study title{" "}
          <input
            type="text"
            className="study-title"
            {...register("studyTitle", {
              required: "Study title is required",
            })}
          />
          {errors.studyTitle?.message && (
            <small>{errors.studyTitle.message}</small>
          )}
        </label>

        <label>
          * Study date{" "}
          <input
            type="date"
            className="study-date"
            {...register("studyDate", {
              required: "Study date is required",
              validate: {
                maxDate: (date) =>
                  isBefore(new Date(date), new Date()) ||
                  "Study date must be until today",
              },
            })}
          />
          {errors.studyDate?.message && (
            <small>{errors.studyDate.message}</small>
          )}
        </label>
      </div>
    </section>
  );
}

export default EducationalExperience;
