import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCount from './ItemCount';

export const ItemDetail = ({info}) => {
  const [goToCart,setGoToCart]=useState(false); 
  const {addProduct}=useCartContext();
  
  const onAdd =(quantity)=>{
    setGoToCart(true);
    addProduct(info,quantity);
  }
  
  return (
    <div>
      <ul style={{background:"primary"}}>
        <li><img src={info.image} alt={info.name}className="photo"/></li>
        <li>{info.id}</li>
        <li>{info.name}</li>
        <li>{info.price}</li>
        <li>{info.stock}</li>
        {
          goToCart 
          ? <Link to='/cart'>Terminar Compra</Link>
          :<ItemCount initial={1} stock={info.stock} onAdd={onAdd}/> 
        }
      </ul>
    </div>
  )
}
