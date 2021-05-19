import React, { Component } from 'react';
import uniqID from 'uniqid';
import Education from './Education';
import ExperienceField from './ExperienceField'; 

export class EditingBody extends Component {
  constructor(props) {
      super(props)
  
      this.state = {     
          experience : { 
            id : uniqID(),
            key : uniqID(),
            inputHandler : this.experienceInputHandler,
            delete : this.deleteExperienceField,
        },       
          experienceArray:[],
          
          education : { 
            id : uniqID(),
            key : uniqID(),
            inputHandler : this.educationInputHandler,
            delete : this.deleteEducationField,
        },     
          educationArray:[],

      }
  }

  inputHandler = (e)=>{
      const target = e.target;
      const value = target.value;
      const name = target.name
    this.setState({
       [name] : value,
    },()=>{    console.log(this.state)})
    
/*     console.log(name,value,target) */
  }
  experienceInputHandler = (e)=>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
  this.setState({
    experienceArray : this.state.experienceArray.map(experience => { 
      if(experience.id===target.id){
        experience[name] = value;
        return experience
      }
      else { return experience }
    }
       ) 
  },()=>{    console.log(this.state)})
  
/*     console.log(name,value,target) */
}

educationInputHandler = (e)=>{
  const target = e.target;
  const value = target.value;
  const name = target.name;
this.setState({
  educationArray : this.state.educationArray.map(education => { 
    if(education.id===target.id){
      education[name] = value;
      return education
    }
    else { return education }
  }
     ) 
},()=>{    console.log(this.state)})

/*     console.log(name,value,target) */
}


   addExperienceField =()=>{
        this.setState({
            experience: {
                id : uniqID(),
                key : uniqID(),
                inputHandler : this.experienceInputHandler,
                delete : this.deleteExperienceField,
            },
            experienceArray : this.state.experienceArray.concat(this.state.experience)
        },()=>{console.log(this.state.experienceArray)})
    }

    deleteExperienceField=(e)=>{
      e.preventDefault();
      const targetID = e.target.id;
      this.setState({
        experienceArray : this.state.experienceArray.filter(experience=> experience.id!==targetID)
      })
    }
    

    addEducationField =()=>{
      this.setState({
          education: {
              id : uniqID(),
              key : uniqID(),
              inputHandler : this.educationInputHandler,
              delete : this.deleteEducationField,
          },
          educationArray : this.state.educationArray.concat(this.state.education)
      },()=>{console.log(this.state.educationArray)})
  }

  deleteEducationField=(e)=>{
    e.preventDefault();
    const targetID = e.target.id;
    this.setState({
      educationArray : this.state.educationArray.filter(education=> education.id!==targetID)
    })
  }






  
    render() {
        const {firstName,lastName,title,adress,phoneNumber,eMail,description,experienceArray,educationArray}=this.state
        return (
            <div>
                <div className="personalInfo">
                <h4>personal personalInfo</h4>
                <form>
                <input name="firstName" type="text" placeholder="First Name" onChange={this.inputHandler} value={firstName}/>
                <input name="lastName" type="text" placeholder="Last Name" onChange={this.inputHandler}  value={lastName}/>
                <input name="title" type="text" placeholder="Title" onChange={this.inputHandler}  value={title}/>
                <input name="adress" type="text" placeholder="Adress" onChange={this.inputHandler}  value={adress}/>
                <input name="phoneNumber"type="text" placeholder="Phone Number" onChange={this.inputHandler}  value={phoneNumber}/>
                <input name="eMail" type="text" placeholder="E-mail" onChange={this.inputHandler}  value={eMail}/>
                <textarea name="description" placeholder="Description..." onChange={this.inputHandler}  value={description}></textarea>
                </form>
                    </div>

                    <div>
                        <button onClick={this.addExperienceField}>add Experience</button>
                        <ExperienceField experienceArray={experienceArray}/>
                        
                    </div>
                    <div>
                        <button onClick={this.addEducationField}>add Education</button>
                         <Education educationArray={educationArray}/> 
                        
                    </div>

            </div>

        )
    }
}

export default EditingBody
