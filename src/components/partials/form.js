// https://shielded-mesa-72796.herokuapp.com/users.json

import React, { Component } from 'react';
import { Link, Redirect  } from "react-router-dom";
import { connect } from 'react-redux';
// import { createUser } from '../actions/postActions';
import { createUser, fetchUser, updateUser } from '../../actions/postActions';
import Axios from 'axios';

const Template = (props) => {
    console.log('Template', props)
    return(
        <form className="form-horizontal" onSubmit={ (e) => props.onSubmitEvent(e) }>
            <div className="form-group" hidden>
                <label className="control-label col-sm-2" htmlFor="email">ID:</label>
                <div className="col-sm-10">
                    <input type={ props.type } className="form-control" id="id" name="id" placeholder="id" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.id }  required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Birthday:</label>
                <div className="col-sm-10">
                    <input type={ props.type } className="form-control" id="birthday" name="birthday" placeholder="birthday" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.birthday }  required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10"> 
                    <input type="email" className="form-control" id="email" name="email" placeholder="email" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.email } required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="favoriteColor">Favorite Color:</label>
                <div className="col-sm-10"> 
                    <input type="text" className="form-control" id="favoriteColor" name="favoriteColor" placeholder="favoriteColor" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.favoriteColor } required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="image">Image URL:</label>
                <div className="col-sm-10"> 
                    <input type="text" className="form-control" id="image" name="image" placeholder="image url" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.image }  required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                <div className="col-sm-10"> 
                    <input type="text" className="form-control" id="name" name="name" placeholder="name" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.name }  required />
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                <div className="col-sm-10"> 
                    <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={ (e) => props.onChangeEvent(e) } value={  props.user.username }  required />
                </div>
            </div>

            <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </div>
        </form>
    )
}

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      "id":"",
      "birthday":"",
      "email":"",
      "favoriteColor":"",
      "image":"",
      "name":"",
      "username":""
    }
    // this.onChangeEvent = this.onChangeEvent.bind(this);
    // this.onSubmitEvent = this.onSubmitEvent.bind(this);
    // this.stateApp_to_componentApp = this.stateApp_to_componentApp.bind(this);
    // console.log('FORM', this.props)
    // console.log('FORM', this.props.location.pathname);
    // this.form = {
    //     "remote":false,
    //     "birthday":"",
    //     "email":"",
    //     "favoriteColor":"",
    //     "image":"",
    //     "name":"",
    //     "username":""
    // };
    document.querySelector("#root").style.background = 'white';
  }

    componentWillMount(){
        if(!this.props.match.params.username){
            console.log('create');
        }
        else {
            // this.props.fetchUser(this.props.match.params.username);
            Axios.get(`http://localhost:4000/edit/${ this.props.match.params.username }`)
            .then( (response) => {
                this.setState({ "id":response.data.id })
                this.setState({ "birthday":response.data.birthday })
                this.setState({ "email":response.data.email })
                this.setState({ "favoriteColor":response.data.favoriteColor })
                this.setState({ "image":response.data.image })
                this.setState({ "name":response.data.name })
                this.setState({ "username":response.data.username })
                // dispatch({
                //     "type":FETCH_USER,
                //     "payload":response.data
                // })
            })           
            .catch((error) => {
                console.log(error);
            })
        }
    }

  
    onChangeEvent(e){
        let field = e.target.name;
        console.log(e.target)
        this.setState({ [field]: e.target.value })
      }
    
    onSubmitEvent(e){
        e.preventDefault();
        const post = {
          "id":this.state.id,
          "birthday":this.state.birthday,
          "email":this.state.email,
          "favoriteColor":this.state.favoriteColor,
          "image":this.state.image,
          "name":this.state.name,
          "username":this.state.username
        }
        this.props.updateUser(post);
        this.props.history.push('/')
      }

  render() {
    // console.log('R_FORM',this.form);
    console.log('R_STATE', this.state);

    if(this.props.location.pathname.includes('create')){
        // console.log('CREATE');
        // <Template type={ 'date' }  user={ 'lol' } onChangeEvent={ (e) => this.onChangeEvent(e) } />
    }
    else if(this.props.location.pathname.includes('update') && this.state){
        return (
            <Template type={ 'text' } onChangeEvent={ (e) => this.onChangeEvent(e) } onSubmitEvent={ (e) => this.onSubmitEvent(e)  } user={ this.state } />
        )
    }
    else {
        return (
            <div>Uriel</div>
        )
    }

    // return (
    //   <div className="container">
    //     <div style={{ "textAlign":"center" }}>
    //       <Link className="nav-link" to="/">
    //         <button className="btn btn-info" style={{ "width":"50%" }}>Back</button>
    //       </Link>
    //     </div>
    //     <br />

    //     <form className="form-horizontal"  onSubmit={ this.onSubmitEvent } >
    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="email">Birthday:</label>
    //         <div className="col-sm-10">
    //           <input type="date" className="form-control" id="birthday" name="birthday" placeholder="birthday" onChange={ this.onChangeEvent } value={ this.state.birthday } required />
    //         </div>
    //       </div>

    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="email">Email:</label>
    //         <div className="col-sm-10"> 
    //           <input type="email" className="form-control" id="email" name="email" placeholder="email" onChange={ this.onChangeEvent } value={ this.state.email } required />
    //         </div>
    //       </div>

    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="favoriteColor">Favorite Color:</label>
    //         <div className="col-sm-10"> 
    //           <input type="text" className="form-control" id="favoriteColor" name="favoriteColor" placeholder="favoriteColor" onChange={ this.onChangeEvent } value={ this.state.favoriteColor } required />
    //         </div>
    //       </div>

    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="image">Image URL:</label>
    //         <div className="col-sm-10"> 
    //           <input type="text" className="form-control" id="image" name="image" placeholder="image url" onChange={ this.onChangeEvent } value={ this.state.image } required />
    //         </div>
    //       </div>

    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="name">Name:</label>
    //         <div className="col-sm-10"> 
    //           <input type="text" className="form-control" id="name" name="name" placeholder="name" onChange={ this.onChangeEvent } value={ this.state.name } required />
    //         </div>
    //       </div>

    //       <div className="form-group">
    //         <label className="control-label col-sm-2" htmlFor="username">Username:</label>
    //         <div className="col-sm-10"> 
    //           <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={ this.onChangeEvent } value={ this.state.username } required />
    //         </div>
    //       </div>

    //       <div className="form-group"> 
    //         <div className="col-sm-offset-2 col-sm-10">
    //           <button type="submit" className="btn btn-default">Submit</button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // );
  }
}

const mapStateToProps = state => ({ 
    user:state.users.user
})

export default connect(mapStateToProps, { createUser, fetchUser, updateUser })(Form)