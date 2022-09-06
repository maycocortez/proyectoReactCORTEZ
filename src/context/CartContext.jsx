import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
  const addItem = (item) => {
    const itemInCart = cart.find((prod)=> prod.id === item.id)
    if(itemInCart){
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity: prod.quantity + item.quantity}
            }else{
                return prod
            }
        })
        setCart(updatedCart)
    }else{
        setCart([...cart, item])
    }   
}
     
        console.log (cart)

        const isInCart = (id) => {
          return cart.some((prod)=> prod.id === id)
      }
        
      const totalPrice = ( ) => {
        return cart.reduce ((prev, act) => prev +act.precio * act.quantity, 0)
    }
        
    const removeItem = (id) => setCart(cart.filter(disco => disco.id !== id))
    
    const totalProductos = () => cart.reduce ((acumulador, discoActual) => acumulador + discoActual.quantity, 0 )
    
    
        
    const clearCart = () => setCart([])
 


  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
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