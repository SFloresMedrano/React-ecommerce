import React from 'react';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';

const Cart = () => {
   const {cart, totalPrice}= useCartContext();

   if (cart.length === 0){
    return (
        <>
            <h3>No hay elementos en el carrito</h3>
            <Link to='/'> Nuestros productos</Link>
        </>
    );
    }else{
        return (
            <> {
                cart.map(product=> <ItemCart key={product.id} product={product}/>)
            }
             <h2>Precio Total: ${totalPrice()}</h2>
            </>
          )
    }

   }
export default Cart;