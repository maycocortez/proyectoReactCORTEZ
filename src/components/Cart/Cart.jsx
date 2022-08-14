import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from "./ItemCart"
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart, totalPrice } = useCartContext();
  
  if (cart.length === 0){
    return (
      <>
        <p><span> No hay elementos en el carrito</span></p>
        <Link to= '/'> Hacer Compras</Link>
      </>
    );
  }
  return (
    <div>
      {
        cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)

      }
      <p className='totalCart'> Total: ${totalPrice()}</p>
      </div>
  )
};


export default Cart