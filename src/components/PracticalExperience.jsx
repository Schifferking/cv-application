function PracticalExperience({ formData, setFormData }) {
  return (
    <section>
      <h2>Practical Experience</h2>
      <div className="labels-container">
        <label>
          * Company name{" "}
          <input
            type="text"
            className="company-name"
            onChange={(event) =>
              setFormData({ ...formData, companyName: event.target.value })
            }
            required
            value={formData.companyName}
          />
          <span className="company-name-error"></span>
        </label>
        <label>
          * Position title{" "}
          <input
            type="text"
            className="position-title"
            onChange={(event) =>
              setFormData({ ...formData, positionTitle: event.target.value })
            }
            required
            value={formData.positionTitle}
          />
          <span className="position-title-error"></span>
        </label>
        <label>
          * Main responsibilities{" "}
          <textarea
            className="responsibilities"
            onChange={(event) =>
              setFormData({ ...formData, responsibilities: event.target.value })
            }
            required
            value={formData.responsibilities}
          />
          <span className="responsibilities-error"></span>
        </label>
        <label>
          * Job start date{" "}
          <input
            type="date"
            className="job-start-date"
            onChange={(event) =>
              setFormData({ ...formData, jobStartDate: event.target.value })
            }
            required
            value={formData.jobStartDate}
          />
          <span className="job-start-date-error"></span>
        </label>
        <label>
          * Job end date{" "}
          <input
            type="date"
            className="job-end-date"
            onChange={(event) =>
              setFormData({ ...formData, jobEndDate: event.target.value })
            }
            required
            value={formData.jobEndDate}
          />
          <span className="job-end-date-error"></span>
        </label>
      </div>
    </section>
  );
}

export default PracticalExperience;
