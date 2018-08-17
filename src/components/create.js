// https://shielded-mesa-72796.herokuapp.com/users.json

import React, { Component } from 'react';
import { Link, Redirect  } from "react-router-dom";
import { connect } from 'react-redux';
import { createUser } from '../actions/postActions';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      "birthday":"",
      "email":"",
      "favoriteColor":"",
      "image":"",
      "name":"",
      "username":""
    }
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
    console.log(this.props)
    document.querySelector("#root").style.background = 'white';
  }
  
  onChangeEvent(e){
    let field = e.target.name;
    this.setState({ [field]: e.target.value })
  }

  onSubmitEvent(e){
    e.preventDefault();
    const post = {
      "birthday":this.state.birthday,
      "email":this.state.email,
      "favoriteColor":this.state.favoriteColor,
      "image":this.state.image,
      "name":this.state.name,
      "username":this.state.username
    }
    this.props.createUser(post);
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <div style={{ "textAlign":"center" }}>
          <Link className="nav-link" to="/">
            <button className="btn btn-info" style={{ "width":"50%" }}>Back</button>
          </Link>
        </div>
        <br />

        <form className="form-horizontal"  onSubmit={ this.onSubmitEvent } >
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Birthday:</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="birthday" name="birthday" placeholder="birthday" onChange={ this.onChangeEvent } value={ this.state.birthday } required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10"> 
              <input type="email" className="form-control" id="email" name="email" placeholder="email" onChange={ this.onChangeEvent } value={ this.state.email } required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="favoriteColor">Favorite Color:</label>
            <div className="col-sm-10"> 
              <input type="text" className="form-control" id="favoriteColor" name="favoriteColor" placeholder="favoriteColor" onChange={ this.onChangeEvent } value={ this.state.favoriteColor } required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="image">Image URL:</label>
            <div className="col-sm-10"> 
              <input type="text" className="form-control" id="image" name="image" placeholder="image url" onChange={ this.onChangeEvent } value={ this.state.image } required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="name">Name:</label>
            <div className="col-sm-10"> 
              <input type="text" className="form-control" id="name" name="name" placeholder="name" onChange={ this.onChangeEvent } value={ this.state.name } required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="username">Username:</label>
            <div className="col-sm-10"> 
              <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={ this.onChangeEvent } value={ this.state.username } required />
            </div>
          </div>

          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(Create)