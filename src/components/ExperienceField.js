import React from 'react';

export default function ExperienceInput(props) {
  const { experienceArray } = props;
  const experienceList = experienceArray.map((experience) => (
    <form key={experience.key} id={experience.id}>
      <input name="position" type="text" placeholder="Position" onChange={experience.input} value={experience.position}  />
      <input name="company" type="text" placeholder="Company" onChange={experience.input} value={experience.company}  />
      <input name="city" type="text" placeholder="City" onChange={experience.input} value={experience.city}  />
      <input name="fromDate" type="date" onChange={experience.input} value={experience.fromDate}  />
      <input name="toDate" type="date" onChange={experience.input} value={experience.toDate}  />
      <button  onClick={experience.remove}> Delete </button>
    </form>
  ));

  return (
    <div>
            {experienceArray.length >=1
           ? (<div style={{fontSize:'x-large',fontWeight:'bold' }}>Experience : </div>)
           : null
          }
      {experienceList}
    </div>
  );
}
