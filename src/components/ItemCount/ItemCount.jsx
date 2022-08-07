import React from "react";


const ItemCount = ({initial,stock,onAdd,contador,setContador})=> {
    
    const sumar = ()=> {
        if (contador < stock) {
            setContador (contador + 1)  
        }
        
    }

    const restar = ()=> {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }
 
    return (
        <>
        <div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
        <button onClick={onAdd}>Comprar</button>
        </>
    )
}


export default ItemCount