import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ producto }) => {
  const onAdd = () => {
    console.log(`Producto Agregado`);
  };
  return (
   <div className='itemDetail' >
    <div>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.descripcion}</p>
      <p>Precio ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
    </div>
    </div>
  );
};
export default ItemDetail;