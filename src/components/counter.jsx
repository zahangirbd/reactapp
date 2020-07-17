import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        value: this.props.value
    }
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    //constructor(){
    //    super();
    //    //this is important to make this available when click will be invoked
    //    this.handleIncrement = this.handleIncrement.bind(this); 
    //}

    handleIncrement = (product) => {
        console.log(product);
        //we need to tell React that state has bee updated by a property.
        this.setState({value: this.state.value + 1}); 
    }

    render() { 
        console.log("props", this.props);
        return (
            <div>
                <h4>Counter #{this.props.id}</h4>
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={()=> this.handleIncrement({param_id:1})}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button className="btn btn-danger btn-sm m-2" 
                    onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
        );
    }


    getBadgeClass() {
        let zclasses = 'badge badge-';
        zclasses += (this.state.value === 0 ? 'warning' : 'primary');
        return zclasses;
    }

    formatCount(){
        const { value } = this.state;
        const z = <h5>Zero</h5>;
        return value === 0 ? z : value;
    }

}
export default Counter;
