import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUsers, deleteUser, checkAuth } from '../actions/postActions';

import ReadUserList from './read/read_user_list';

class Read extends Component {
    componentWillMount(){
        document.querySelector("#root").style.background = '#eee';
        this.props.checkAuth();
        this.props.fetchUsers();
    }

    notice(){
        if(!this.props.auth){
            return (
                <div style={{ "textAlign":"center" }}>
                    To CREATE or UPDATE users make sure to sign in
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div style={{ "textAlign":"center" }}>
                    <Link to="/create">
                        <button className="btn btn-info" style={{ "width":"50%" }}>Add Users</button>
                    </Link>
                </div>

                { this.notice() }
                <br />

                <section id="team" className="pb-5">
                    <div className="container">
                        <h5 className="section-title h1">All Users</h5>
                        <br />
                        <ReadUserList users={ this.props.posts.items } remove={ this.props.deleteUser }  />
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    "posts":state.users,
    "auth":state.auth
})

export default connect(mapStateToProps, { fetchUsers, deleteUser, checkAuth })(Read);