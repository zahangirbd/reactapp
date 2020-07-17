import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
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
    const counters = this.state.counters.filter(c=> c.id !== counterId);
    console.log(counters.length);
    this.setState({counters:counters});
}

  render () {
    return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          handleReset={this.handleReset} 
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
        />
      </main>
    </React.Fragment> 
    );
  }
}

export default App;
