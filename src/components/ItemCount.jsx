import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {green} from '@mui/material/colors';
        
export const ItemCount= ({initial, stock, onAdd})=> {
    const[count, setCount]= useState(parseInt(initial))

    const decrease =()=> {
        setCount(count - 1);
    }
    const increase =()=>{
        setCount(count +1)
    }

    useEffect(() => {
      setCount(parseInt(initial)); 
    }, [initial])
    if (stock<=0) return 'Lo sentimos, el elemento esta fuera de stock';
    return (
        <div className='counter'>
            <button disabled={count<=1}onClick={decrease}>-</button>
            <span className='span'>{count}</span>
            <button disabled={ count>=stock}onClick={increase}>+</button>
            <Stack direction="row" spacing={2}>
            <Button sx={{backgroundColor:green[500],
                    mt:2,
                    ':hover': {
                        bgcolor: green[800], 
                        color: 'white'}}}
                onClick={()=>onAdd(count)} variant="contained" >Agregar al Carrito</Button>
            </Stack>
        </div>
    )
};

export default ItemCount;