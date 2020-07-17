import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count: 0
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
        //console.log(product);
        //we need to tell React that state has bee updated by a property.
        this.setState({count: this.state.count+1}); 
    }

    render() { 
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={()=> this.handleIncrement({id:1})}
                    className="btn btn-secondary btn-sm">Increment
                </button>
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
