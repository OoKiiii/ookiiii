import React, { Component } from 'react'
import Routes from './route/index'
import { BrowserRouter } from "react-router-dom";

// import './assets/scss/style.scss'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App;
