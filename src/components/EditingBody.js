import React, { Component } from 'react';
import uniqID from 'uniqid';
import ExperienceField from './ExperienceField'; 

export class EditingBody extends Component {
  constructor(props) {
      super(props)
  
      this.state = {     
          experience : { 
            id : uniqID(),
            key : uniqID(),
            inputHandler : this.experienceInputHandler,
            delete : this.deleteEexperienceField,
        },       
          experienceArray:[],

             
/*         firstName:'',
           lastName:'',
           title:'',
           adress:'',
           phoneNumber:'',
           eMail:'',
           description:' testing this',
           position:'', 
           company:'',
           city:'',
           fromDate:'',
           toDate:'', */

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


   addExperienceField =()=>{
        this.setState({
            experience: {
                id : uniqID(),
                key : uniqID(),
                inputHandler : this.experienceInputHandler,
                delete : this.deleteEexperienceField,
            },
            experienceArray : this.state.experienceArray.concat(this.state.experience)
        },()=>{console.log(this.state.experienceArray)})
    }

    deleteEexperienceField=(e)=>{
      e.preventDefault();
      const targetID = e.target.id;
      this.setState({
        experienceArray : this.state.experienceArray.filter(experience=> experience.id!==targetID)
      })
    }
    
  
    render() {
        const {firstName,lastName,title,adress,phoneNumber,eMail,description,experienceArray}=this.state
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


            </div>

        )
    }
}

export default EditingBody
