import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ( {producto} ) => {
  const { removeItem } = useCartContext()
  return (
    <div className='divItemCart'>
      
      <div className='itemCart' >
      <img  src={producto.img} alt={producto.id} />
      <div className='datos'>
        <p>Título: {producto.name}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Subtotal: ${producto.precio * producto.quantity}</p>
        <button onClick={() => removeItem(producto.id)}> Eliminar </button>
        </div>
      </div>
    </div>
    
  );
  
};


export default ItemCart