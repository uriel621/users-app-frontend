import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.navigate_away();
        }
    
        componentDidUpdate(){
            this.navigate_away();
        }
    
        navigate_away(){
            if(!this.props.auth) {
                this.props.history.push('/');
                alert('You Need To Sign In');
            }
        }

        render(){
            return <ChildComponent { ...this.props } />
        }
    }

    const mapStateToProps = state => ({ 
        "auth":state.auth
    })

    return connect(mapStateToProps) (ComposedComponent);
}