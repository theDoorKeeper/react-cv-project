import React from 'react'


export default function Education(props) {
    const {educationArray}=props;
    const educationList = educationArray.map(education=> 
        <form key={education.key}>
        <input name="University" type="text" placeholder="University" onChange={education.inputHandler} value={education.University} id={education.id}/>
        <input name="degree" type="text" placeholder="degree" onChange={education.inputHandler} value={education.degree} id={education.id}/>
        <input name="city" type="text" placeholder="City" onChange={education.inputHandler} value={education.city} id={education.id}/>
        <input name="subject" type="text" placeholder="Subject" onChange={education.inputHandler} value={education.city} id={education.id}/>
        <input name="fromDate" type="date"  onChange={education.inputHandler} value={education.fromDate} id={education.id}/>
        <input name="toDate" type="date"  onChange={education.inputHandler} value={education.toDate} id={education.id} />
        <button id={education.id} onClick={education.delete}> Delete </button>
        </form> );



    return (
        <div>
        {educationList}
        </div>
    )
}



