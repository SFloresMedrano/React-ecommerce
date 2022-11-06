import React from 'react';
import Item from './Item'
import {Grid} from '@mui/material/'
const ItemList = ({data=[]})=>{

    return(
        data && data.map(product=>(
            <Grid item md={4} key={product.id}>
                <Item key={product.id} info={product}/>
            </Grid>
        ))
        )
}

export default ItemList;