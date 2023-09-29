function CV({ setIsDataValid, formData }) {
  function handleClick() {
    setIsDataValid(false);
  }

  return (
    <>
      <p>
        <b>First name: </b>
        {formData.firstName}
      </p>
      <p>
        <b>Last name: </b>
        {formData.lastName}
      </p>
      <p>
        <b>Email: </b>
        {formData.email}
      </p>
      <p>
        <b>Phone number: </b>
        {formData.phoneNumber}
      </p>
      <p>
        <b>School name: </b>
        {formData.schoolName}
      </p>
      <p>
        <b>Study title: </b>
        {formData.studyTitle}
      </p>
      <p>
        <b>Study date: </b>
        {formData.studyDate}
      </p>
      <p>
        <b>Company name: </b>
        {formData.companyName}
      </p>
      <p>
        <b>Position title: </b>
        {formData.positionTitle}
      </p>
      <p>
        <b>Main responsibilities: </b>
        {formData.responsibilities}
      </p>
      <p>
        <b>Job start date: </b>
        {formData.jobStartDate}
      </p>
      <p>
        <b>Job end date: </b>
        {formData.jobEndDate}
      </p>
      <button onClick={() => handleClick()}>Edit CV</button>
    </>
  );
}

export default CV;
