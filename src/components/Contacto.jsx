import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React, { useState } from 'react';


export default function Contacto() {
  const [name,setName]=useState("");
  const [tel,setTel]=useState("");
  const [email,setEmail]=useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false)

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  
  const handleClick =()=>{
    setOpen(true)
    if(!name || !email|| !tel){
      return
    }
    if (validateEmail(email)===false){
      return {
      }
    }

}

  return (
    <div className='contactForm'>
      <h2>Contacto</h2>
              <div className='inputContainer'>
                <input type="text" placeholder='Nombre' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='Telefono' id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                <input type="text" placeholder='Email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextareaAutosize/>
                <Button variant="outlined" onClick={handleClick}>
                        Enviar mensaje
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
                        Gracias {name.toUpperCase()},tu mensaje será enviado a nuestros asesores. 
                        Te contactaremos al siguiente correo:{email}, o bien te llamaremos al numero: {tel}.
                        Muchas gracias por tu interés!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Gracias por contacto</Button>
                    </DialogActions>
                  </Dialog>
              </div>
              </div>
    </div>
  )
}
