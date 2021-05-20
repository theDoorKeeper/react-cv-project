import React, { Component } from 'react'
import EditingBody from './components/EditingBody'
import Header from './components/Header'
import './style/header.css'

export class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <EditingBody/>
      </div>
    )
  }
}

export default App
