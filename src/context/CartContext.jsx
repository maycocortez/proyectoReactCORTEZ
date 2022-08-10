import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(disco=> {
                return disco.id === item.id ? { ...disco, cantidad: disco.cantidad + cantidad} : disco
            }));
        }else {
            setCart([...cart, {...item, cantidad}])   
            
        }
    }
        console.log (cart)
        const isInCart = (id) => {return cart.some(disco=> disco.id === id) ? true : false}

    const totalPrice = ( ) => {
        return cart.reduce ((prev, act) => prev +act.quantity * act.price, 0)
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
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider