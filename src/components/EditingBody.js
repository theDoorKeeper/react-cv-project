/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import uniqID from 'uniqid';
import Education from './Education';
import ExperienceField from './ExperienceField';
import Preview from './Preview';
import '../style/main.css';
const  EditingBody = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    adress: '',
    phoneNumber: '',
    eMail: '',
    description: '',
  });

  const [experienceArray, setExperienceArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
 
  const experienceInputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    const { id } = target.parentNode; 
    console.log(id)
    console.log(experienceArray) 
   setExperienceArray(previousArray=>
     previousArray.map(experience=>
      experience.id === id  ? {...experience, [name] : value} 
      : experience 
     )
      )
 
  }; 
  
  const deleteExperienceField = (e) => {
    e.preventDefault();
    const targetID = e.target.parentNode.id;
    setExperienceArray(previousArray=> previousArray.filter((experience) => experience.id !== targetID));
  };

 const addExperienceField = () => {
    const newExperience = experience()
    const newArray = experienceArray.concat(newExperience)
    setExperienceArray(newArray);
    
  };

   const experience =()=> {
    const key = uniqID();
    const id = uniqID();
    const input = experienceInputHandler;
    const remove = deleteExperienceField;
    return {key,id,input,remove}
  }



  const inputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    const additions = { [name]: value };
    const newInfo = { ...personalInfo, ...additions };
    setPersonalInfo(newInfo);
  };

 

  const addEducationField = () => {
    const newEducation = education();
    setEducationArray(
      educationArray.concat(newEducation),
    );
  };


  const education = () => {
    const id = uniqID();
    const key = uniqID();
    const input = educationInputHandler;
    const remove = deleteEducationField;
    return { id, key, input,remove };
  };


  const deleteEducationField = (e) => {
    e.preventDefault();
    const targetID = e.target.parentNode.id;

    setEducationArray( previousArray=>
      previousArray.filter((education) => education.id !== targetID),
    );
  };



  const educationInputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    const { id } = target.parentNode
    
    setEducationArray( previousArray=>
      previousArray.map((education) => {
        if (education.id === id) {
          education[name] = value;
          return education;
        } return education;
      }),
    );
  };

  const reset = ()=>{
    setEducationArray([]);
    setExperienceArray([]);
    setPersonalInfo([]);
    document.querySelectorAll('input').forEach(input=>{
      input.value='';
    })
  }

  const {
    firstName, lastName, title, adress, phoneNumber, eMail, description,
  } = personalInfo;

  return (
    <div className="main">

      <div className="editing">

        <div className="personalInfo">

          <form className="personalForm">
            <div style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Personal info : </div>
            <input name="firstName" type="text" placeholder="First Name" onChange={inputHandler} value={firstName} />
            <input name="lastName" type="text" placeholder="Last Name" onChange={inputHandler} value={lastName} />
            <input name="title" type="text" placeholder="Title" onChange={inputHandler} value={title} />
            <input name="adress" type="text" placeholder="Adress" onChange={inputHandler} value={adress} />
            <input name="phoneNumber" type="text" placeholder="Phone Number" onChange={inputHandler} value={phoneNumber} />
            <input name="eMail" type="text" placeholder="E-mail" onChange={inputHandler} value={eMail} />
            <textarea id="description" name="description" type="text" placeholder="Description..." onChange={inputHandler} value={description} />
          </form>
        </div>

        <div>

          <button onClick={addEducationField}>add Education</button>
          <Education educationArray={educationArray} />

        </div>

        <div>

          <button onClick={addExperienceField}>add Experience</button>
          <ExperienceField experienceArray={experienceArray} />

        </div>
        
        <div>
          <button className="reset" onClick={reset}>RESET</button>
        </div>

      </div>

      <div className="preview">
        <Preview 
          personalInfo={personalInfo}
          experienceArray={experienceArray}
          educationArray={educationArray} />
      </div>

    </div>
  );
};
export default EditingBody 

