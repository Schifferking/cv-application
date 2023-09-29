function GeneralInformation({ formData, setFormData }) {
  return (
    <section>
      <h2>General Information</h2>
      <label>
        * First name{" "}
        <input
          type="text"
          className="first-name"
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
          required
          value={formData.firstName}
        />
        <span className="first-name-error"></span>
      </label>
      <label>
        * Last name{" "}
        <input
          type="text"
          className="last-name"
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
          required
          value={formData.lastName}
        />
        <span className="last-name-error"></span>
      </label>
      <label>
        * Email{" "}
        <input
          type="email"
          className="email"
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          required
          value={formData.email}
        />
        <span className="email-error"></span>
      </label>
      <label>
        * Phone number{" "}
        <input
          type="tel"
          className="phone-number"
          onChange={(event) =>
            setFormData({ ...formData, phoneNumber: event.target.value })
          }
          required
          value={formData.phoneNumber}
        />
        <span className="phone-number-error"></span>
      </label>
    </section>
  );
}

export default GeneralInformation;
