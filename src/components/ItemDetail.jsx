import React from 'react'

export const ItemDetail = ({info}) => {
  console.log(info)
  return (
    <div>
      <ul style={{background:"primary"}}>
        <li><img src={info.image} className="photo"/></li>
        <li>{info.id}</li>
        <li>{info.name}</li>
        <li>{info.price}</li>
      </ul>
    </div>
  )
}
