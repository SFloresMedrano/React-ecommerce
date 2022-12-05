import { Grid } from "@mui/material";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export const ItemListContainer=()=>{
  const {idcategory} = useParams();
    const [data, setData]=useState([]);

    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb,'productos');
      if (idcategory){
        const queryFilter = query(queryCollection,where('category','==',idcategory))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product=>({id:product.id,...product.data()}))))
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product=>({id:product.id,...product.data()}))))
      }
    },[idcategory]);

    return(
        <Grid 
          display='flex'
          container 
          justifyContent="center"
          wrap="wrap"
          backgroundColor="#CCCCFF"
          alignItems="center"
          spacing={3}
          margin-left='auto'
          margin-right='auto'>
          
          <ItemList data={data}/>
        </Grid>
    )
}

export default ItemListContainer;