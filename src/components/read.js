import React, { Component } from 'react';

class Read extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:null
        };

        fetch('https://shielded-mesa-72796.herokuapp.com/users')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({ users:json.users })
            });

    }

    render() {
        if(!this.state.users){
            return (
                <div></div>
            )
        }
        return (
            <div>
                {  
                    this.state.users.map((user, index) => {
                        return (
                            <div key={ index }>
                                { user.name }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Read;