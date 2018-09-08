import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { change_auth } from '../../actions/postActions';

class Navbar extends Component {
    
    render_header(){
        if(this.props.auth){
            return (
                <li className="nav-item">
                    <Link onClick={ () => this.props.change_auth(false) } className="nav-link" to="/">Sign Out</Link>
                </li>
            )
        }
        else {
            return (
                <li className="nav-item">
                    <Link onClick={ () => this.props.change_auth(true) } className="nav-link" to="/">Sign in</Link>
                </li>
            )
        }
    }

    render() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <Link className="navbar-brand" to="/">Users</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    { this.render_header() }
                </ul>
            </div>
        </nav>
    );
  }
}

const mapStateToProps = state => ({ 
    auth:state.auth
})

export default connect(mapStateToProps, { change_auth })(Navbar);