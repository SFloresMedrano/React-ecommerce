import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
import {red, grey, green} from '@mui/material/colors'



const Cart = () => {
   const {cart, totalPrice,clearCart}= useCartContext();

   if (cart.length === 0){
    return (
        <div className='cartContainer'>
            <h3>No hay elementos en el carrito</h3>
            <Button>
                <Link to='/'> <h4>Nuestros Productos</h4></Link>
            </Button>
        </div>
    );
    }else{
        return (
            
            <div className='cartContainer'> 
             <h2>Tus perfiles</h2>
            {
                cart.map(product=> <ItemCart key={product.id} product={product} show={true}/>)
            }
             <h2>Precio Total: ${totalPrice()}</h2>
             <Link to='/Checkout'>
                <Button 
                sx ={{backgroundColor: green[500], color:grey[50] }}><Link to='/checkout'> Terminé de comprar!</Link>
            </Button>
             </Link>
            <Button sx ={{backgroundColor: red[500],color:grey[50] }} onClick={()=>clearCart()}>Vaciar el carrito
            </Button>
            </div>
          )
    }
   }
export default Cart;