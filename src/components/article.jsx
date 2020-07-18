import React from 'react';

const Article = ({items, loading}) =>{
    if(loading){
        return <div> Loading... </div>;
    }
    
    return <ul className="list-group mb-4">
        {items.map(itm =>(
            <li key={itm.id} className="list-group-item">{itm.title}</li>
        ))}
    </ul>; 
}

export default Article;