import React from 'react';
import ItemCount from './ItemCount';
const ItemDetail = ({ producto }) => {
  const onAdd = () => {
    console.log(`Producto Agregado`);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.descripcion}</p>
      <p>Precio ${producto.precio}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;