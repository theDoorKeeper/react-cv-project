import React from 'react';
import '../style/preview.css';

function Preview(props) {
  const {personalInfo,experienceArray, educationArray, } = props;

  const {firstName, lastName, title, adress, phoneNumber, eMail, description} = personalInfo;

  const experiencePreview = experienceArray.map((experience) => (
    <ul className="preview-secondary-list">
      <li>
        Position :
        {experience.position}
      </li>
      <li>
        company :
        {experience.company}
      </li>
      <li>
        city :
        {experience.city}
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
    <ul className="preview-secondary-list">
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
        <h4 className="preview-list-title">Personal Details</h4>
        <ul className="preview-description-list">
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
            <h4 className="preview-list-title">Description :</h4>
            <br/>{description}
          </li>
          <li className="previewListItem">
          <h4 className="preview-list-title">Education :</h4> 
            {educationPreview}
          </li>
          <li className="previewListItem">
           <h4 className="preview-list-title"> Experience :</h4>
            {experiencePreview}
          </li>
        </ul>

      </div>

    </div>
  );
}

export default Preview;
