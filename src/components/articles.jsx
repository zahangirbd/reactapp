
import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {
    state = { 
        items : ['item1', 'item2']
     }


    componentDidMount() {
        axios
        .get("/articles")
        .then(response => {
            console.log(response);
            if(response.status === 200){
                if(response.data.status === "SUCCESS"){
                    this.setState({
                        isLoaded: true,
                        items: response.data.data
                      });    
                  }              
            } else {
                this.setState({
                    isLoaded: true,
                    error:{ message: response.statusText}
                  });
            }
        })
        .catch(function(error) {
            this.setState({
                isLoaded: true,
                error
              });
        });
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