import React from 'react';
import { useCartContext } from '../CartContext';


const ItemCart = ({product}) => {
    const {removeProduct}=useCartContext();
  return (
    <div className='ItemCart'>
        <img src="product.image" alt={product.name} />
        <div>
            <p>Item: {product.name}</p>
            <p>Id: {product.id}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar </button>
        </div>
    </div>
  )
}

export default ItemCart;