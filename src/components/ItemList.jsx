import React from 'react';
import Item from './Item'
import {Grid} from '@mui/material/'
const ItemList = ({data=[]})=>{

    return(
        data && data.map(product=>(
            <Grid 
                item 
                sm={4}
                key={product.id}
                style={{textAlign: "center"}}
                justifyContent="center"
                width={20}>
                <Item key={product.id} info={product}/>
            </Grid>
        ))
        )
}

export default ItemList;