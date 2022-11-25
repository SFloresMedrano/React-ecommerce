import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (item) => {
  const {iditem}= useParams();
  const [data, setData]=useState({});

  useEffect(() => {
    const querydb =getFirestore();
    const queryDoc= doc(querydb,'productos',iditem)
    getDoc(queryDoc)
    .then(res=>setData({id:res.id, ...res.data()})  )
  },[iditem]);

  return (
    <>
        <ItemDetail info={data}/>
    </>

  )
}
