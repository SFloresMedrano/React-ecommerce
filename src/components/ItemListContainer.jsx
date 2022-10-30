import  React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({greeting}){
    const onAdd =(quantity)=>{
        console.log(`Compraste ${quantity} unidades`)
    }

    return(
     <div style={{ 
        background: '#2E3B55',
        height:50,
        color: 'red' }}>
        <p style={{ fontSize: 25,textAlign: 'center' }}>Bienvenido a la pagina, {greeting}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
     </div>
    )
}