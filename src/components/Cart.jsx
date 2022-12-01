import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';



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
                cart.map(product=> <ItemCart key={product.id} product={product} show={true}/>)
            }
             <h2>Precio Total: ${totalPrice()}</h2>
             <Link to='/Checkout'>
                <input type="button" value="Terminé de Comprar" id="goToCheckout"/>
             </Link>
            </>
          )
    }
   }
export default Cart;