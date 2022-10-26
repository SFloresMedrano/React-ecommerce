import  React from "react";

export default function ItemListContainer({greeting}){
    
    return(
     <div style={{ 
        background: '#2E3B55',
        height:50,
        color: 'red' }}>
        <p style={{ fontSize: 25,textAlign: 'center' }}>Bienvenido a la pagina, {greeting}</p>
     </div>
    )
}