// https://shielded-mesa-72796.herokuapp.com/users.json

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/partials/navbar';
import Form from './components/partials/form';
// import Create from './components/create';
import Read from './components/read';
// import Update from './components/update';
import Delete from './components/delete';
import About from './components/about';
import Counter from './components/Counter';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/create' component={ Form }/>
          <Route exact path='/' component={ Read }/>
          <Route path='/update/:username' component={ Form }/>
          <Route path='/delete' component={ Delete }/>
          <Route path='/about' component={ About }/>
          <Route path='/counter' component={ Counter }/>
        </Switch>
      </div>
    );
  }
}

export default Routes;