import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ( {productos} ) => {
  const { removeItem } = useCartContext()
  return (
    <div>
      <img  src={productos.img} alt={productos.name} />
      <div >
        <p>Título: {productos.name}</p>
        <p>Cantidad: {productos.quantity}</p>
        <p>Precio: ${productos.precio}</p>
        <p>Subtotal: ${productos.quantity * productos.precio}</p>
        <button onClick={() => removeItem(productos.id)}> Eliminar </button>
      </div>
    </div>
  );
};

export default ItemCart