import React from 'react'

function Preview(props) {
    const {firstName, lastName, title, adress, phoneNumber, eMail, description,
    experienceArray, educationArray} = props;
    return (
        <div>
            <header>
                    <h1>{firstName} {lastName}</h1>
                    <h4>{title}</h4>
            </header>

            <div className='sideBar'>
                <h4>Personal Details</h4>
                <ul>
                  Adress : {adress}
                  Phone Number : {phoneNumber}
                  Email : {eMail}
                </ul>
                </div>
            <div className='mainPreview'>
                <ul>
                    Description : {description}

                    
                    </ul>
                


            </div>
            
        </div>
    )
}

export default Preview
