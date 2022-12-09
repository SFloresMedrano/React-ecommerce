import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCount from './ItemCount';
import { Button } from '@mui/material';
import {red,green,blue,grey} from '@mui/material/colors'

export const ItemDetail = ({info}) => {
  const [goToCart,setGoToCart]=useState(false); 
  const {addProduct}=useCartContext();
  
  const onAdd =(quantity)=>{
    setGoToCart(true);
    addProduct(info,quantity);
  }
  
  return (
    <div className='cardDetail'>
      <div className='cardDetailContainer'>
    <div className='cardDetailImage'>
      <img src={info.image} alt={info.name}className="photo"/>
    </div>
    <div className='cardDetailAttributes'>
      <p>Item: {info.name}</p>
      <p>Precio: ${info.price}</p>
      <p>Disponible en stock:{info.stock}</p>
      {
        goToCart 
        ? 
        <Button sx ={{backgroundColor: green[500],color:grey[50] }}> 
        <Link to='/cart'>Terminar Compra</Link>
        </Button>
        :<ItemCount initial={1} stock={info.stock} onAdd={onAdd}/> 
      }
    </div>

      </div>
    </div>


  )
}
