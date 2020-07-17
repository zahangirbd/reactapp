import React, { Component } from 'react';
import './counter'
import Counter from './counter';
class Counters extends Component {
    state = {  
        counters: [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
        ]
    }

    handleReset = ()=> {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleIncrement = (counter) => {
        //clone the counters here. Using ... we can clone object 
        const counters = [...this.state.counters];
        //find the right counter
        const index = counters.indexOf(counter);
        //clone the found counter
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDelete = (counterId) =>{
        console.log("Delete is invoked, id=", counterId);
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        console.log(counters.length);
        this.setState({counters:counters});
    }

    render() { 
        return ( 
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(
                    counter =>
                        <Counter 
                            key={counter.id}  
                            onDelete={this.handleDelete}
                            onIncrement={this.handleIncrement}
                            counter={counter}
                        />
                        
                )}
            </div>
         );
    }
}
 
export default Counters;