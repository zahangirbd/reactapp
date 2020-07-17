import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: 0
    }
    render() { 
        return (
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        const z = <h1>Zero</h1>;
        return count === 0 ? z : count;
    }

}
export default Counter;
