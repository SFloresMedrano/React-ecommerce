import React, {useState }from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {useCartContext} from '../CartContext';

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
        <li><img src={info.image} className="photo"/></li>
        <li>{info.id}</li>
        <li>{info.name}</li>
        <li>{info.price}</li>
        {
          goToCart 
          ? <Link to='/checkout'>Terminar Compra</Link>
          :<ItemCount initial={1} stock={info.stock} onAdd={onAdd}/> 
        }
      </ul>
    </div>
  )
}
