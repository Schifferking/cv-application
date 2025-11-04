function PracticalExperience({
  errors,
  getValues,
  isBefore,
  isStartDateBeforeEndDate,
  register,
}) {
  return (
    <section>
      <h2>Practical Experience</h2>
      <div className="labels-container">
        <label>
          * Company name{" "}
          <input
            type="text"
            className="company-name"
            {...register("companyName", {
              required: "Company name is required",
            })}
          />
          {errors.companyName?.message && (
            <small>{errors.companyName.message}</small>
          )}
        </label>

        <label>
          * Position title{" "}
          <input
            type="text"
            className="position-title"
            {...register("positionTitle", {
              required: "Position title is required",
            })}
          />
          {errors.positionTitle?.message && (
            <small>{errors.positionTitle.message}</small>
          )}
        </label>

        <label>
          * Main responsibilities{" "}
          <textarea
            className="responsibilities"
            {...register("responsibilities", {
              required: "Responsibilities are required",
            })}
          />
          {errors.responsibilities?.message && (
            <small>{errors.responsibilities.message}</small>
          )}
        </label>

        <label>
          * Job start date{" "}
          <input
            type="date"
            className="job-start-date"
            {...register("jobStartDate", {
              required: "Job start date is required",
              validate: {
                minDate: () =>
                  isStartDateBeforeEndDate(getValues()) ||
                  "Job start date must be earlier than job end date",
                maxDate: (date) =>
                  isBefore(new Date(date), new Date()) ||
                  "Job start date must be until today",
              },
            })}
          />
          {errors.jobStartDate?.message && (
            <small>{errors.jobStartDate.message}</small>
          )}
        </label>

        <label>
          * Job end date{" "}
          <input
            type="date"
            className="job-end-date"
            {...register("jobEndDate", {
              required: "Job end date is required",
              valuesAsDate: true,
              validate: {
                maxDate: (date) =>
                  isBefore(new Date(date), new Date()) ||
                  "Job end date must be until today",
              },
            })}
          />
          {errors.jobEndDate?.message && (
            <small>{errors.jobEndDate.message}</small>
          )}
        </label>
      </div>
    </section>
  );
}

export default PracticalExperience;
