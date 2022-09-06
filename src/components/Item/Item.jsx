import React from "react"
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


    const Item = ({ producto }) => {
      const { img, name, descripcion, precio, stock,category,id}=producto

    return (
      <div className="card" style={{width:'20rem', margin:'.5rem'}}>
      <img src={img}className="card-img-top" alt=""/>
      <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Categoria: {category}</p>

          <p className="card-text">${precio}</p>
          <p className="card-text">Stock: {stock}</p>
          <Button   variant="outline-info">
            <Link to={`/item/${id}` }> Ver detalle </Link>
          </Button>
     

      </div>

    </div>

  
    )
  
    }
  export default Item