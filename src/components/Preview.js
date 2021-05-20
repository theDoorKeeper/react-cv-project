import React from 'react';
function Preview(props) {
  const {personalInfo,experienceArray, educationArray, } = props;

  const {firstName, lastName, title, adress, phoneNumber, eMail, description} = personalInfo;

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
    <div className="previewContainer">
      <header className="previewHeader">
        <div className='mainInfo'> 
         {firstName}
          {' '}
          {lastName}
        </div>
        <div className='secondaryInfo'>
        {title}
        </div>

      </header>

      <div className="previewSideBar">
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


      <div className="previewMain">

        <ul className="previewList">
          <li className="previewListItem">
            Description :
            <br/>{description}
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
