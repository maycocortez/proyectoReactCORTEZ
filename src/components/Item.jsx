import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemDetailContainer from "./ItemDetailContainer";
import { useState } from "react";


const Item = ({producto}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const { img, nombre, descripcion, precio, stock,}=producto
  

    return (
      <div className="card" style={{width:'20rem', margin:'.5rem'}}>
      <img src={img}className="card-img-top" alt=""/>
      <div className="card-body">
          <p className="card-title">{nombre}</p>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">${precio}</p>
          <p className="card-text">Stock: {stock}</p>
          <Button variant="primary" onClick={handleShow}>
        Ver detalles
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><ItemDetailContainer /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>

    </div>
  
    )
  }
  
  export default Item