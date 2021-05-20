import React from 'react';

function Preview(props) {
  const {
    firstName, lastName, title, adress, phoneNumber, eMail, description,
    experienceArray, educationArray,
  } = props;

  const experiencePreview = experienceArray.map((experience) => (
    <ul>
      <li>
        Position :
        {experience.position}
      </li>
      <li>
        company :
        {experience.company}
      </li>
      <li>
        from :
        {experience.fromDate}
      </li>
      <li>
        to :
        {experience.toDate}
      </li>
    </ul>
  ));

  const educationPreview = educationArray.map((education) => (
    <ul>
      <li>
        University :
        {education.university}
      </li>
      <li>
        degree :
        {education.degree}
      </li>
      <li>
        city :
        {education.city}
      </li>
      <li>
        subject :
        {education.subject}
      </li>
      <li>
        from :
        {education.fromDate}
      </li>
      <li>
        to :
        {education.toDate}
      </li>
    </ul>
  ));

  return (
    <div>
      <header>
        <h1>
          {firstName}
          {' '}
          {lastName}
        </h1>
        <h4>{title}</h4>
      </header>

      <div className="sideBar">
        <h4>Personal Details</h4>
        <ul>
          <li>
            {' '}
            Adress :
            {adress}
          </li>
          <li>
            Phone Number :
            {phoneNumber}
          </li>
          <li>
            Email :
            {eMail}
          </li>
        </ul>
      </div>
      <div className="mainPreview">
        <ul className="previewList">
          <li className="previewListItem">
            Description :
            <p>{description}</p>
          </li>
          <li className="previewListItem">
            Education :
            {educationPreview}
          </li>
          <li className="previewListItem">
            Experience :
            {experiencePreview}
          </li>

        </ul>

      </div>

    </div>
  );
}

export default Preview;
