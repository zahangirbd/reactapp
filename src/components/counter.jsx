import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: 0
    }
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        const z = <h5>Zero</h5>;
        return count === 0 ? z : count;
    }

}
export default Counter;
