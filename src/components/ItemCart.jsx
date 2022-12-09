import { Button } from '@mui/material';
import React from 'react';
import { useCartContext } from '../CartContext';
import {red, grey} from '@mui/material/colors'




const ItemCart = ({product,show}) => {
    const {removeProduct}=useCartContext();
  return (
    <div className='ItemCart'>
      <div className='checkoutImage'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='cartDetails'>
            <p>Item: {product.name}</p>
            <p>Código de producto: {product.code}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            {show ? <Button sx ={{backgroundColor: red[500],color:grey[50] }}onClick={()=>removeProduct(product.id)}>Eliminar </Button> : null}
      </div>
    </div>
  )
}

export default ItemCart;