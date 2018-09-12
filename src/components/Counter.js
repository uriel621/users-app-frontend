import React, { Component } from 'react';

class Counter extends Component {
    render() {
        document.querySelector("#root").style.background = 'white';
        return (
            <div className="container">
                Counter
            </div>
        );
    }
}

export default Counter;