import React, { Component } from 'react'

export class ExperienceInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            position : '',
            company : '',
            city : '',
            fromDate : Date(),
            toDate : Date()
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
    
    render() {
        const {position,company,city,fromDate,toDate}=this.state
        return (
            <div>
            <input name="position" type="text" placeholder="Position" onChange={this.inputHandler} value={position}/>
            <input name="company" type="text" placeholder="Company" onChange={this.inputHandler} value={company}/>
            <input name="city" type="text" placeholder="City" onChange={this.inputHandler} value={city}/>
            <input name="fromDate" type="date"  onChange={this.inputHandler} value={fromDate}/>
            <input name="toDate" type="date"  onChange={this.inputHandler} value={toDate}/>
            </div>
        )
    }
}

export default ExperienceInput
