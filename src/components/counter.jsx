import React, { Component } from 'react';
class Counter extends Component {
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    //constructor(){
    //    super();
    //    //this is important to make this available when click will be invoked
    //    this.handleIncrement = this.handleIncrement.bind(this); 
    //}

    render() { 
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button className="btn btn-danger btn-sm m-2" 
                    onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }


    getBadgeClass() {
        let zclasses = 'badge badge-';
        zclasses += (this.props.counter.value === 0 ? 'warning' : 'primary');
        return zclasses;
    }

    formatCount(){
        const { value } = this.props.counter;
        const z = <h5>Zero</h5>;
        return value === 0 ? z : value;
    }

}
export default Counter;
