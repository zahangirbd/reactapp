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

    handleDelete = (counterId) =>{
        console.log("Delete is invoked, id=", counterId);
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        console.log(counters.length);
        this.setState({counters:counters});
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(
                    counter =>
                        <Counter 
                            key={counter.id}  
                            onDelete={this.handleDelete}
                            counter={counter}
                        />
                        
                )}
            </div>
         );
    }
}
 
export default Counters;