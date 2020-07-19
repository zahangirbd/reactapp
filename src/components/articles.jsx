
import React from 'react';
import Article from './article'

const Articles = ({items, loading}) => { 
    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'> Articles </h1>
            <Article items={items} loading={loading}></Article>
        </div>
    );	
}
 
export default Articles;