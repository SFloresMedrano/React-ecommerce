import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const products =[
    {id:1001,name:'Perfil 1', price:200,stock:50},
    {id:1002,name:'Perfil 2',price:400,stock:200},
    {id:1003,name:'Perfil 3',price:205,stock:60},
    {id:1004,name:'Perfil 4',price:605,stock:20},
    {id:1005,name:'Perfil 5',price:800,stock:750},
]

export const ItemListContainer=({greeting})=>{
    const [data, setData]=useState([]);

    useEffect(() => {
      const getData = new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 3000);
      })
      getData.then(res=>setData(res))
    });

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
        <ItemList data={data}/>
     </div>
    )
}

export default ItemListContainer;