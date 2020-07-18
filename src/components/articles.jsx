
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import ArticleItem from './articleitem'

const Articles = () => { 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    
    //it is used when component is mounted. safe for AJAX call
    useEffect(()=>{
        const fetchItems = async () =>{
            setLoading(true);
            const res = await axios.get("/articles").catch((error) => {
                console.log(error);
                this.setState({
                    loading: true,
                    error
                });
            });
            setItems(res.data.data);
            setLoading(false);
        }
        fetchItems();
    }, []);

    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'> Articles </h1>
            <ArticleItem items={items} loading={loading}></ArticleItem>
        </div>
    );	
}
 
export default Articles;