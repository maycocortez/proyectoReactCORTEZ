import  React from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';


const CardWidget = ()=> {
    const {totalProductos,cart} = useCartContext()

    if (cart.length === 0){
        return (
          <>
          </>
        );
    }
    return(

        <div>
        <FaShoppingCart/>
        
        <span>{totalProductos()}</span>
        </div>
    )
}

export default CardWidget