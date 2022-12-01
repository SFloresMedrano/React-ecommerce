import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = React.createContext([]);
export const useCartContext=()=> useContext(CartContext);

const CartProvider= ({children}) => {
  const [cart,setCart]=useState([]);

  useEffect(() => {
    let previousCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(previousCart);
  }, [])

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])
  
  
  const addProduct=(item, quantity)=>{
      if (isInCart(item.id)){
        setCart(cart.map(product=>{
          return product.id===item.id ? {...product, quantity: product.quantity+ quantity}:product
        }))
      }else{
        setCart([...cart,{...item ,quantity}])
      }
  }
    const clearCart=()=> setCart([]);
    const isInCart=(id)=> cart.find(product=>product.id===id)?true:false;
  
    const removeProduct =(id)=> {
      if (cart.lenght>0){
        setCart([cart.filter(product =>product.id !==id)])
      }else{
        setCart([]);
      }
    }

  const totalPrice =()=>{
    return cart.reduce((prev,act) => prev+act.quantity * act.price,0)
  };

  const totalProducts=() => cart.reduce((acumulador,productoActual)=>acumulador + productoActual.quantity,0);

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart,
    }}>
        {children}
    </CartContext.Provider>  
  )
}

export default CartProvider