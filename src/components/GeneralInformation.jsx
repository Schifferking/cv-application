function GeneralInformation() {
  return (
    <section>
      <h2>General Information</h2>
      <label>
        * First name <input type="text" className="first-name" required />
        <span className="first-name-error"></span>
      </label>
      <label>
        * Last name <input type="text" className="last-name" required />
        <span className="last-name-error"></span>
      </label>
      <label>
        * Email <input type="email" className="email" required />
        <span className="email-error"></span>
      </label>
      <label>
        * Phone number <input type="tel" className="phone-number" required />
        <span className="phone-number-error"></span>
      </label>
    </section>
  );
}

export default GeneralInformation;
