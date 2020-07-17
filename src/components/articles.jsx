
import React, { Component } from 'react';

class Articles extends Component {
    state = { 
        items : ['item1', 'item2']
     }


    componentDidMount() {
        fetch("/articles")
          .then(res => res.json())
          .then(
            (result) => {

              if(result.status === "SUCCESS"){
                this.setState({
                    isLoaded: true,
                    items: result.data
                  });    
              }
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }     

    render() { 
        const { error, isLoaded, items } = this.state;
        if(error){
            return <div> Error: {error.message} </div>;
        } else if (!isLoaded){
            return <div> Loading... </div>;
        } else {
            return (
                <div>
                    <h1>Articles</h1>
                    <ul>
                        {items.map( itm => 
                            <li key={itm.id}>{itm.title}</li>
                        )}
                    </ul>
                </div>
            );
        }
    }
}
 
export default Articles;