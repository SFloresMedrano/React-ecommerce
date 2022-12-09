import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (item) => {
  const {iditem}= useParams();
  const [data, setData]=useState({});
  const {cart}= useCartContext();
  useEffect(() => {
    const querydb =getFirestore();
    const queryDoc= doc(querydb,'productos',iditem) 
    getDoc(queryDoc)
    .then((item)=>{
      const found = cart.find((item)=>item.id === Number(iditem));
      const quantity= found ? found.quantity : 0;
      setData({id:item.id, ...item.data(), stock: item.data().stock - quantity});
    })
  },[iditem]);

  return (
    <>
      <div>
        <ItemDetail info={data}/>
      </div>
    </>

  )
}
