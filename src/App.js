import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'
import Articles from './components/articles'

class App extends Component {
  state = {  
    counters: [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0}
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
      <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
        <Articles></Articles>
      </main>
    </React.Fragment> 
    );
  }
}

export default App;
