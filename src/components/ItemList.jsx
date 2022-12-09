import React from 'react';
import Item from './Item';
import {Grid} from '@mui/material/';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const ItemList = ({data=[]})=>{

    if(data===[]){
        return(
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
    }else{
        return(
            data && data.map(product=>(
                <Grid 
                    className='itemList'
                    item 
                    xs={3}
                    key={product.id}
                    style={{textAlign: "center"}}
                    justifyContent="center"
                    marginLeft={'24px'}>
                    <Item key={product.id} info={product}/>
                </Grid>
            ))
            )
    }
}

export default ItemList;