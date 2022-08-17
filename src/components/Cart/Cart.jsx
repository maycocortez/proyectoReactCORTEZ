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
        <Link to= '/'> Seguir comprando</Link>
      </>
    );
  }
  return (
    <div className='cart'>
      {
        cart.map((producto )=> <ItemCart key={producto.id} producto={producto}/>)

      }
      <p > Total: ${totalPrice()}</p>
      <Link to= '/'> <button>Finalizar compra</button></Link>
      </div>
  )
};


export default Cart