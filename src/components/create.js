// https://shielded-mesa-72796.herokuapp.com/users.json

import React, { Component } from 'react';
import Axios from 'axios';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:''
    }
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onChangeEvent(e){
    let field = e.target.name
    this.setState({ [field]: e.target.value })
    console.log( field)
  }

  onSubmitEvent(e){
    e.preventDefault();
    const post = {
      "username":this.state.username,
      "email":this.state.email
    }

    Axios.post('http://localhost:4000/test', post)
    
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  render() {
    return (
      <form onSubmit={ this.onSubmitEvent }>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={ this.onChangeEvent } value={ this.state.username } />
        </div>
        <div>
          <label>email</label>
          <input type="text" name="email" onChange={ this.onChangeEvent } value={ this.state.email } />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Create;