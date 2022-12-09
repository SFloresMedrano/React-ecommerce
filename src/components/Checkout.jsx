import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
import {green,red, grey} from '@mui/material/colors'


const Checkout = () => {
   const {cart, totalPrice,clearCart}= useCartContext();
   const [name,setName]=useState("");
   const [tel,setTel]=useState("");
   const [email,setEmail]=useState("");
   const show=false;
   const [open, setOpen] = React.useState(false);
   const handleClose = () => setOpen(false);
   const [orderId,setOrderId]=useState("");

  const order={
      buyer: {name,tel,email},
      pedido: JSON.stringify(cart),
      items: cart.map(product=> ({id:product.id, name:product.name,price:product.price,quantity:product.quantity})),
      total: totalPrice(),
    }
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    function validateEmail(email) { 
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$""/;
      return re.test(email);
    }

    const handleClick =()=>{
      setOpen(true);
      if(!name || !email|| !tel){
        return
      }
      if (validateEmail(email)===false){
        return {
        }
      }
        console.log(email,name,tel)
        const db=getFirestore();
        const ordersCollection=collection (db, 'orders');
        addDoc(ordersCollection,order)
        .then(({id})=>{
          cart.forEach((item) => {
            const document =doc(db,'productos',item.id)
            updateDoc(document,{stock:increment(-item.quantity)});
          });
        setOrderId(id);
        })
    }

   if (cart.length === 0){
    return (
      <div className='cartContainer'>
      <h3>No hay elementos en el carrito</h3>
      <Button sx ={{backgroundColor: green[500], color:grey[50] }}>
        <Link to='/'>Nuestros Productos</Link>
      </Button>
  </div>  
    );
    }else{
        return (
            <div className='checkoutContainer'>
            {
                cart.map(product=> <ItemCart key={product.id} product={product} show={show}/>)
            }
             <h2>Precio Total: ${totalPrice()}</h2>
             <input type="text" placeholder='Nombre' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
             <input type="text" placeholder='Telefono' id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
             <input type="text" placeholder='Email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <Button variant="outlined" onClick={handleClick}>
                    Finalizar Compra
            </Button>
             <div>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle><DoneOutlineIcon sx={{color: 'A400'}}></DoneOutlineIcon></DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        Gracias {name.toUpperCase()} por tu compra. Tu codigo de seguimiento es {orderId}.
                         Te pediremos confirmación al siguiente correo:{email}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={()=>clearCart()}>Gracias por tu compra</Button>
                    </DialogActions>
                  </Dialog>
              </div>
            </div>
          )
    }
   }
export default Checkout;