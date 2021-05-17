import React, { Component } from 'react'

export class EditingBody extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           firstName:'',
           lastName:'',
           title:'',
           adress:'',
           phoneNumber:'',
           eMail:'',
           description:' testing this',

      }
  }

  inputHandler = (e)=>{
      const target = e.target;
      const value = target.value;
      const name = target.name
    this.setState({
       [name] : value,
    })
    console.log(this.state)
  }


/*   experienceFields =
                      <div>
            <input name="position" type="text" placeholder="Position" onChange={this.inputHandler} value={position}/>
            <input name="company" type="text" placeholder="Company" onChange={this.inputHandler} value={company}/>
            <input name="city" type="text" placeholder="City" onChange={this.inputHandler} value={city}/>
            <input name="fromDate" type="date"  onChange={this.inputHandler} value={fromDate}/>
            <input name="toDate" type="date"  onChange={this.inputHandler} value={toDate}/>
            </div>
 */
  
    render() {
        const {firstName,lastName,title,adress,phoneNumber,eMail,description}=this.state
        return (
            <div>
                <div className="personalInfo">
                <h4>personal Info</h4>
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

                        <button>add Experience</button>

                    </div>


            </div>

        )
    }
}

export default EditingBody
