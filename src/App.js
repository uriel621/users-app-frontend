import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
