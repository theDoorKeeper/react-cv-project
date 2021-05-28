/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import uniqID from 'uniqid';

const EditingBodyHook = () => {
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

  const experience = () => {
    const id = uniqID();
    const key = uniqID();
    const inputHandler = experienceInputHandler;
    const remove = deleteExperienceField;
    return {
      id, key, inputHandler, remove,
    };
  };

  const education = () => {
    const id = uniqID();
    const key = uniqID();
    const inputHandler = experienceInputHandler;
    const remove = deleteExperienceField;
    return { id, key, inputHandler };
  };

  const inputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    const additions = { [name]: value };
    const newInfo = { ...personalInfo, ...additions };
    setPersonalInfo(newInfo);
  };

  const addExperienceField = () => {
    const newExperience = experience();
    setExperienceArray(
      experienceArray.concat(newExperience),
    );
  };

  const addEducationField = () => {
    const newEducation = education();
    setEducationArray(
      educationArray.concat(newEducation),
    );
  };

  const deleteExperienceField = (e) => {
    e.preventDefault();
    const targetID = e.target.id;

    setExperienceArray(
      experienceArray.filter((experience) => experience.id !== targetID),
    );
  };

  const deleteEducationField = (e) => {
    e.preventDefault();
    const targetID = e.target.id;

    setExperienceArray(
      educationArray.filter((education) => education.id !== targetID),
    );
  };

  const experienceInputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    setExperienceArray(
      experienceArray.map((experience) => {
        if (experience.id === target.id) {
          experience[name] = value;
          return experience;
        } return experience;
      }),
    );
  };

  const educationInputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    setExperienceArray(
      educationArray.map((education) => {
        if (education.id === target.id) {
          education[name] = value;
          return education;
        } return education;
      }),
    );
  };

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
            <input id="description" name="description" type="text" placeholder="Description..." onChange={inputHandler} value={description} />
          </form>
        </div>

        <div>

          <button onClick={addExperienceField}>add Experience</button>
          <ExperienceField experienceArray={experienceArray} />

        </div>
        <div>

          <button onClick={this.addEducationField}>add Education</button>
          <Education educationArray={educationArray} />

        </div>

        <div>
          {/*  <button className="reset" onClick={reset}>RESET</button> */}
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
