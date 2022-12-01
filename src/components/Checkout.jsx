import { addDoc, collection, getFirestore, increment, updateDoc,doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {green} from '@mui/material/colors';

const Checkout = () => {
   const {cart, totalPrice}= useCartContext();
   const [name,setName]=useState("");
   const [tel,setTel]=useState("");
   const [email,setEmail]=useState("");
   const show=false;
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [orderId,setOrderId]=useState("");
   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };




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
          cart.forEach((item) => {
            const document =doc(db,'productos',item.id)
            updateDoc(document,{stock:increment(-item.quantity)});
          });
        setOrderId(id);
        setOpen(true);
        })
    }

   if (cart.length === 0){
    return (
        <>
            <h3>Aun no hay productos en tu carrito!</h3>
            <Link to='/'> Hace click acá para empezar a comprar</Link>
        </>
    );
    }else{
        return (
            <> {
                cart.map(product=> <ItemCart key={product.id} product={product} show={show}/>)
            }
             <h2>Precio Total: ${totalPrice()}</h2>
             <input type="text" placeholder='Nombre' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
             <input type="text" placeholder='Telefono' id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
             <input type="text" placeholder='Email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <Button onClick={handleClick}>Finalizar Compra</Button>
             <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      <DoneOutlineIcon sx={{ color: green['A400'] }}/>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb:2 }}>
                      {name}, tu compra fue exitosa!.
                      Un correo será enviado a {email} para confirmar tu compra.
                      Tu codigo de seguimiento es: {orderId}
                    </Typography>
                    <Button onClick={handleClose}>
                      Muchas Gracias por tu Compra!
                    </Button>
                  </Box>
                </Modal>
              </div>
            </>
          )
    }
   }
export default Checkout;