import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'
import Articles from './components/articles'
import ArticleAdd from './components/articleadd'
import Todos from './components/todos'

class App extends Component {
  state = {  
    counters: [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0}
    ],
    items: [],
    loading: false,
    itemReloadState: false
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

//Lifecyle hook event - it is invoked onece the component is ready
//this is the palce we can invoke AJAX call
componentDidMount(){
  //console.log("App - componentDidMount invoked");
  this.fetchArticlesFromServer();
}

//Lifecyle hook event - when an state is updated
componentDidUpdate(prevProps, prevState) {
  //console.log('App - componentDidUpdate invoked, itemReloadState = ' + this.state.itemReloadState);
  //we just need to check whether itemReloadState is changed or not. 
  //if itemReloadState is changed then we need to reload Article items using AJAX call 
  if (prevState.itemReloadState !== this.state.itemReloadState) {
    //console.log('App - componentDidUpdate invoked itemReloadState state has changed.');
    this.fetchArticlesFromServer();
  }
}

fetchArticlesFromServer = async () => {
  this.setState({loading: true});
  const res = await axios.get("/articles").catch((error) => {
      console.log(error);
      this.setState({
          loading: true,
          error
      });
  });
  this.setState({items: res.data.data});
  this.setState({loading: false});
}

handleOnArticleAdd = ()=>{
  console.log("App - handleOnArticleAdd invoked");
  this.setState({itemReloadState: !this.state.itemReloadState});
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
        <Articles items={this.state.items} loading={this.state.loading}></Articles>
        <ArticleAdd onArticleAdd={this.handleOnArticleAdd}></ArticleAdd>
        <Todos />
      </main>
    </React.Fragment> 
    );
  }
}

export default App;
