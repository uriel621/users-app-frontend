import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
