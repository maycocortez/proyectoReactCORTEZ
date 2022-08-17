import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item) => {
        const isInCart = cart.some((producto) => producto.id === item.id);
    
        if (isInCart) {
          const updateCart = cart.map((producto) => {
            if (producto.id === item.id) {
              return { ...producto, quantity: producto.quantity + item.quantity };
            }
          });
          setCart(updateCart);
        } else {
          setCart([...cart, item]);
        }
      };
        console.log (cart)

    const totalPrice = ( ) => {
        return cart.reduce ((prev, act) => prev +act.quantity * act.precio, 0)
    }
        
    const removeItem = (id) => setCart(cart.filter(disco => disco.id !== id))
    
    const totalProductos = () => cart.reduce ((acumulador, discoActual) => acumulador + discoActual.quantity, 0 )
    
        
    const clearCart = () => setCart([])
 


  return (
    <CartContext.Provider value={{
        clearCart,
      
        removeItem,
        addItem,
        totalPrice,
        totalProductos,
        cart,
        
    
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider