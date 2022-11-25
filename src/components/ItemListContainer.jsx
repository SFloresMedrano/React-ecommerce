import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection,getDocs,query,where } from "firebase/firestore";

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