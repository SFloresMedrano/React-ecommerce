import React from "react";
import { Link } from "react-router-dom";



export default function Footer (){
    return(
        <div className="footer">

            <div><Link to='/'>Inicio</Link></div>
            <div><Link to='/checkout'>Checkout</Link></div>
            <div><Link to='/contacto'>Contacto</Link></div>
        </div>
    )
}