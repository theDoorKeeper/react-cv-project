import React, { Component } from 'react'
import EditingBody from './components/EditingBody'
import Header from './components/Header'

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
