import React, { Component } from 'react';
import axios from 'axios';

class ArticleAdd extends Component {
    state = { 
        title:'',
        body: ''
     }

    constructor(){
        super();
        //binding this to submitToServer
        this.submitToServer = this.submitToServer.bind(this);
    } 

    updateTitle = (event)=>{
        this.setState({title : event.target.value});
    }

    updateBody = (event)=>{
        this.setState({body: event.target.value});
    }

    handleSave = ()=> {
        //console.log("Handle save called.", this);
        console.log("ArticleAdd - handleSave:", this.state.title, this.state.body);
        this.submitToServer();
    }

    async submitToServer(){
        let body = {
            title: this.state.title,
            body: this.state.body
        };
        axios
        .post("/articles", body)
        .then((response) => {
            //console.log(response);
            if(response.status === 200){
                if(response.data.status === "SUCCESS"){
                    this.setState({
                        isLoaded: true,
                        id: response.data.data.id,
                        title: response.data.data.title,
                        body: response.data.data.body 
                    });
                    
                    //just notifying the parent componet to update the UI
                    this.props.onArticleAdd();
                }              
            } else {
                this.setState({
                    isLoaded: true,
                    error:{ message: response.statusText}
                });
            }
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                isLoaded: true,
                error
            });
        });
    }

    handleDelete = ()=>{
        //console.log("Handle delete called.", this);
    }

    render() { 
        return ( 
            <div>
                <label>Book Title:</label>
                <input type="text" onChange={this.updateTitle} className="m-2"></input>
                <label>Book Body:</label>
                <input type="text" onChange={this.updateBody} className="m-2"></input>
                <button onClick={this.handleSave} className="btn btn-primary btn-sm m-2">Save</button>
                <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
            </div>
         );
    }
}
 
export default ArticleAdd;