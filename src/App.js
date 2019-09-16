import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'details-dialog-element'
import Modal from './Modal'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Modal />
      </div>
    )
  }
}

export default App
