import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useCartContext } from '../CartContext';

const CartWidget = () => {
    const {totalProducts}=useCartContext();

  return (
    <>
        <ShoppingCartIcon/>
        <span>{totalProducts() || ""}</span>
    </>
  )
}

export default CartWidget;




/* export const CartWidget=()=>{
    const {totalProducts}=useCartContext();

    return(
        <div className="cartWidget">
        <ShoppingCartIcon/>
        <span>{totalProducts() || ''}</span>
    </div>
    );  

}
export default CartWidget(); */
