import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/postActions';

import ReadUserList from './read/read_user_list';

class Read extends Component {
    componentWillMount(){
        this.props.fetchUsers();
        console.log(this.props);
    }

    render() {
        return (
            <div className="container">
                <ReadUserList users={ this.props.posts.items } />
            </div>
        );
    }
}

const mapStateToPorops = state => ({ 
    posts:state.users
})

export default connect(mapStateToPorops, { fetchUsers })(Read);