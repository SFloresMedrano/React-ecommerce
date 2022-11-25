import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
   const {cart, totalPrice}= useCartContext();
   const [name,setName]=useState("");
   const [tel,setTel]=useState("");
   const [email,setEmail]=useState("");

    const order=()=>{
        const order={
            buyer:{name,tel,email},
            pedido: JSON.stringify(cart),
        }
        console.log(order)
    }
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

             <input type="text" placeholder='Nombre' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
             <input type="text" placeholder='Telefono' id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
             <input type="text" placeholder='Email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <input type="button" value="Comprar" id="buyButton" onClick={order}/>
            </>
          )
    }

   }
export default Cart;