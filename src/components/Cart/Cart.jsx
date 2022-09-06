import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from "./ItemCart"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cart, totalPrice } = useCartContext();
  const navegar = useNavigate()

  if (cart.length === 0){
    return (
      <>
        <p style={{marginTop:'50px'}}><span> No hay elementos en el carrito</span></p>
        <Link to= '/'> Seguir comprando</Link>
      </>
    );
  }
  return (
    <div style={{marginTop:'50px'}} >
      { cart.map((producto )=> <ItemCart key={producto.id} producto={producto}/>) }
      <div className="botonComprar">
      <p> Total: ${totalPrice()}</p>
      <button onClick={()=>navegar("/checkout")}>Finalizar compra</button>
      </div>
      </div>
  )
};


export default Cart