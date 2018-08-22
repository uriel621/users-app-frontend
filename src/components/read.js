import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/postActions';

import ReadUserList from './read/read_user_list';

class Read extends Component {
    componentWillMount(){
        document.querySelector("#root").style.background = '#eee';
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="container">
                <div style={{ "textAlign":"center" }}>
                    <Link to="/create">
                        <button className="btn btn-info" style={{ "width":"50%" }}>Add Users</button>
                    </Link>
                </div>
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
    posts:state.users
})

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Read);