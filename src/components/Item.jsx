import React from 'react';

const Item=({info})=>{
    return(
        <a href="A" className='product'>
            <img src='' alt="" />
            <h2>{info.id}</h2>
            <p>{info.name}</p>
        </a> 
    )
}

export default Item;