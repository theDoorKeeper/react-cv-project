import React from 'react';

export default function Education(props) {
  const { educationArray } = props;
  const educationList = educationArray.map((education) => (
    <form className="educationForm" key={education.key} id={education.id}>
      <input name="university" type="text" placeholder="University" onChange={education.input} value={education.University} />
      <input name="degree" type="text" placeholder="degree" onChange={education.input} value={education.degree} />
      <input name="city" type="text" placeholder="City" onChange={education.input} value={education.city} />
      <input name="subject" type="text" placeholder="Subject" onChange={education.input} value={education.subject} />
      <input name="fromDate" type="date" onChange={education.input} value={education.fromDate} />
      <input name="toDate" type="date" onChange={education.input} value={education.toDate} />
      <button onClick={education.remove}> Delete </button>
    </form>
  ));
  return (
   
    <div>
      {educationArray.length >=1
           ? (<div style={{fontSize:'x-large',fontWeight:'bold' }}>Education : </div>)
           : null
          }
      {educationList}
    </div>
  );
}
