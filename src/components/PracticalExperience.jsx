function PracticalExperience() {
  return (
    <section>
      <h2>Practical Experience</h2>
      <label>
        * Company name <input type="text" className="company-name" required />
        <span className="company-name-error"></span>
      </label>
      <label>
        * Position title{" "}
        <input type="text" className="position-title" required />
        <span className="position-title-error"></span>
      </label>
      <label>
        * Main responsibilities{" "}
        <textarea className="responsibilities" required />
        <span className="responsibilities-error"></span>
      </label>
      <label>
        * Job start date{" "}
        <input type="date" className="job-start-date" required />
        <span className="job-start-date-error"></span>
      </label>
      <label>
        * Job end date <input type="date" className="job-end-date" required />
        <span className="job-end-date-error"></span>
      </label>
    </section>
  );
}

export default PracticalExperience;
