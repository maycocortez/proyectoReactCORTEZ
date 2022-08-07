import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
const ItemDetail = ({ producto }) => {
  const [contador,setContador] = useState(0)
  const [compra,setCompra] = useState(false)
  const navigate = useNavigate()

  const onAdd = () => {
    setCompra(true)
  };
  return (
   <div className='itemDetail' >
    <div>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.descripcion}</p>
      <p>Precio ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      {compra ? <div>
        <button onClick={()=>{navigate('/')}}>Seguir Comprando</button>
      <button onClick={()=>{navigate('/cart')}}>Ir al carrito</button>
      </div>
      :<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador} />}
      
    </div>
    </div>
  );
};
export default ItemDetail;