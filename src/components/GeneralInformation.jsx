import "../styles/general-information.css";

function GeneralInformation({ errors, register }) {
  return (
    <section>
      <h2>General Information</h2>
      <label>
        * First name{" "}
        <input
          type="text"
          className="first-name"
          {...register("firstName", {
            required: "First name is required",
            validate: {
              matchPattern: (v) =>
                /^[a-zA-Z]+$/.test(v) || "First name must be a valid name",
            },
          })}
        />
        {errors.firstName?.message && <small>{errors.firstName.message}</small>}
      </label>
      <label>
        * Last name{" "}
        <input
          type="text"
          className="last-name"
          {...register("lastName", {
            required: "Last name is required",
            validate: {
              matchPattern: (v) =>
                /^[a-zA-Z]+$/.test(v) || "Last name must be a valid name",
            },
          })}
        />
        {errors.lastName?.message && <small>{errors.lastName.message}</small>}
      </label>
      <label>
        * Email{" "}
        <input
          type="email"
          className="email"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid email address",
            },
          })}
        />
        {errors.email?.message && <small>{errors.email.message}</small>}
      </label>
      <label>
        * Phone number{" "}
        <input
          type="tel"
          className="phone-number"
          {...register("phoneNumber", {
            required: "Phone number is required",
            validate: {
              matchPattern: (v) =>
                /^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/.test(
                  v
                ) || "Phone number must be similar to +123-234-345-6789",
            },
          })}
        />
        {errors.phoneNumber?.message && (
          <small>{errors.phoneNumber.message}</small>
        )}
      </label>
    </section>
  );
}

export default GeneralInformation;
