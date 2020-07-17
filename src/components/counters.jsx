import React, { Component } from 'react';
import './counter'
import Counter from './counter';
class Counters extends Component {

    render() { 
        return ( 
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.handleReset}>Reset</button>
                {this.props.counters.map(
                    counter =>
                        <Counter 
                            key={counter.id}  
                            onDelete={this.props.handleDelete}
                            onIncrement={this.props.handleIncrement}
                            counter={counter}
                        />
                        
                )}
            </div>
         );
    }
}
 
export default Counters;