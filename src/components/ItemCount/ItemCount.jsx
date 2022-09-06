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
            <button onClick={restar} style={{backgroundColor:"red",color:"white"}}>-</button>
            <span>{contador}</span>
            <button disabled={contador >= stock} onClick={sumar} style={{backgroundColor:"green",color:"white"}}>+</button>
        </div>
        <button onClick={onAdd}>Comprar</button>
        </>
    )
}


export default ItemCount