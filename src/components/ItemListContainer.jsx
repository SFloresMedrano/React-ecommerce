import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export const ItemListContainer=()=>{
  
  const products =[
    {id:1001,name:'Perfil 1', price:200,stock:50},
    {id:1002,name:'Perfil 2',price:400,stock:200},
    {id:1003,name:'Perfil 3',price:205,stock:60},
    {id:1004,name:'Perfil 4',price:605,stock:20},
    {id:1005,name:'Perfil 5',price:800,stock:750},
  ]
  
    const [data, setData]=useState([]);

    useEffect(() => {
      const getData = new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 3000);
      })
      getData.then(res=>setData(res))
    });

    return(
        <Grid container justify="center">
          <ItemList data={data}/>
        </Grid>

    )
}

export default ItemListContainer;