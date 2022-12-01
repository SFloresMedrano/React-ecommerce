import React from 'react';
import { useCartContext } from '../CartContext';



const ItemCart = ({product,show}) => {
    const {removeProduct}=useCartContext();
  return (
    <div className='ItemCart'>
      <div className='checkoutImage'>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
            <p>Item: {product.name}</p>
            <p>Código de producto: {product.code}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            {show ? <button onClick={()=>removeProduct(product.id)}>Eliminar </button> : null}
      </div>
    </div>
  )
}

export default ItemCart;