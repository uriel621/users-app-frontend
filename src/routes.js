// https://shielded-mesa-72796.herokuapp.com/users.json

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/partials/navbar';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Delete from './components/delete';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/create' component={ Create }/>
          <Route exact path='/' component={ Read }/>
          <Route path='/update' component={ Update }/>
          <Route path='/delete' component={ Delete }/>
        </Switch>
      </div>
    );
  }
}

export default Routes;