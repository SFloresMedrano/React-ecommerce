import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useCartContext } from '../CartContext';
import {grey} from '@mui/material/colors'

const CartWidget = () => {
    const {totalProducts}=useCartContext();

  return (
    <>
        <ShoppingCartIcon sx={{color: grey[50]}} className='cartIcon'/>
        <div className='itemCount'>{totalProducts() || ""}</div>
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
