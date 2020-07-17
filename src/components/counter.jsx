import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: 0,
        tags : ['tag1', 'tag2', 'tag3']
    }
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }


    getBadgeClass() {
        let zclasses = 'badge badge-';
        zclasses += (this.state.count == 0 ? 'warning' : 'primary');
        return zclasses;
    }

    formatCount(){
        const { count } = this.state;
        const z = <h5>Zero</h5>;
        return count === 0 ? z : count;
    }

}
export default Counter;
