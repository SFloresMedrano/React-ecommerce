import { addDoc, collection, getFirestore, increment, updateDoc,doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
   const {cart, totalPrice, clearCart}= useCartContext();
   const [name,setName]=useState("");
   const [tel,setTel]=useState("");
   const [email,setEmail]=useState("");

    const order={
            buyer: {name,tel,email},
            pedido: JSON.stringify(cart),
            items: cart.map(product=> ({id:product.id, name:product.name,price:product.price,quantity:product.quantity})),
            total: totalPrice(),
    }

    const handleClick =()=>{
        const db=getFirestore();
        const ordersCollection=collection (db, 'orders');
        addDoc(ordersCollection,order)
        .then(({id})=>{
            console.log(id);
            cart.forEach((item) => {
                const document =doc(db,'productos',item.id)
                updateDoc(document,{stock:increment(-item.quantity)});
            });
        })

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
             <input type="button" value="Comprar" id="buyButton" onClick={handleClick}/>
             <input type="button" value="Vaciar Carrito" id="clearCart" onClick={clearCart}/>
            </>
          )
    }

   }
export default Cart;