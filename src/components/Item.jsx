import React from "react"
import ItemList from "./ItemList"

const Item = ({producto}) => {
    const { img, nombre, descripcion, precio, stock,}=producto
  

    return (
      <div className="card" style={{width:'20rem', margin:'.5rem'}}>
      <img src={img}className="card-img-top" alt={nombre}/>
      <div className="card-body">
          <p className="card-text">{nombre}</p>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">${precio}</p>
          <p className="card-text">stock: {stock}</p>
          
      </div>

    </div>
  
    )
  }
  
  export default Item