import React, { Component } from 'react';
import './counter'
import Counter from './counter';
class Counters extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Counter/>
                <Counter/>
                <Counter/>
            </div>
         );
    }
}
 
export default Counters;