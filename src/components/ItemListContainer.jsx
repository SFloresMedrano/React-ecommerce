import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer=()=>{
  const {idcategory} = useParams();
   
  const products =[
    {id:1001,name:'Perfil 1', price:200,stock:50,category:'A30', image:"/img/1001.jpg"},
    {id:1002,name:'Perfil 2',price:400,stock:200,category:'A40',image:"/img/1002.jpg"},
    {id:1003,name:'Perfil 3',price:205,stock:6,category:'A30',image:"/img/1003.jpg"},
    {id:1004,name:'Perfil 4',price:605,stock:20,category:'A30',image:"/img/1004.jpg"},
    {id:1005,name:'Perfil 5',price:800,stock:750,category:'A40',image:"/img/1005.jpg"},
  ]
    const [data, setData]=useState([]);

    useEffect(() => {
      const getData = new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 3000);
      })
      getData.then(res=>{
        if (idcategory){
          setData(res.filter(item=>item.category === idcategory))
        }else{
          setData(res)
        }
      })
    },[idcategory]);

    return(
        <Grid 
          container 
          justifyContent="center"
          wrap="wrap"
          backgroundColor="#CCCCFF"
          alignItems="center"
          p={3}
          spacing={3}>
          <ItemList data={data}/>
        </Grid>

    )
}

export default ItemListContainer;