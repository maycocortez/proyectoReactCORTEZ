import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
  const [contador,setContador] = useState(1)
  const [compra,setCompra] = useState(false)
  const navigate = useNavigate()
  const {addItem} = useCartContext()
  const { id, name, descripcion, category, precio,stock, img } = producto;

  const onAdd = () => {
    let itemAComprar = {
      id,
      name,
      precio,
      descripcion, 
      category,
      img,
      quantity: contador,
    }
    addItem(itemAComprar)
    setCompra(true)
  };
  return (
   
   <div className='itemDetail' >
  
        <img src={img} alt={name}  className='foto' />

        <div >
        <h3>{name}</h3>
        <p>{descripcion}</p>
        <p>Precio ${precio}</p>
        <p>Stock: {stock}</p>
        {compra ? 
          <div  className="botonera">
            <button onClick={()=>{navigate('/')}}>Seguir Comprando</button>
            <button onClick={()=>{navigate('/cart')}}>Ir al carrito</button>
            </div>
        :<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador} />}
      </div>
    </div>
  );
};
export default ItemDetail;