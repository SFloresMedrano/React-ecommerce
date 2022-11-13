import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (item) => {
  const {iditem}= useParams();

  const product =[
    {id:1001,name:'Perfil 1', price:200,stock:50,category:'A30', image:"/img/1001.jpg"},
    {id:1002,name:'Perfil 2',price:400,stock:200,category:'A40',image:"/img/1002.jpg"},
    {id:1003,name:'Perfil 3',price:205,stock:6,category:'A30',image:"/img/1003.jpg"},
    {id:1004,name:'Perfil 4',price:605,stock:20,category:'A30',image:"/img/1004.jpg"},
    {id:1000,name:'Perfil 5',price:800,stock:750,category:'A40',image:"/img/1000.jpg"},
  ]

  const [data, setData]=useState({});

  useEffect(() => {
    const getData = new Promise(resolve=>{
      setTimeout(() => {
          resolve(product.find((item)=> item.id == iditem))
      }, 2000);
    })
    getData.then(res=>setData(res))
  },[iditem]);

  return (
    <>
        <ItemDetail info={data}/>
    </>

  )
}
