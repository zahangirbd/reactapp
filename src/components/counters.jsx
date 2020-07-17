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

    handleDelete = () =>{
        console.log("Delete is invoked");
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(
                    counter =>
                        <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}>
                        </Counter>
                )}
            </div>
         );
    }
}
 
export default Counters;