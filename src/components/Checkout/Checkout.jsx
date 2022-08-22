import React from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp,getFirestore} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const Checkout = () => {

    const [client,setClient ]= useState ({})
    const {cart,totalProductos,clearCart} = useCartContext();
    const [orderId,setOrderId] = useState("")

    const datosClient = (e) => {
        setClient({
          ...client,
          [e.target.name]: e.target.value,
        });
      };

      const terminarCompra = (e)=> {
        const db = getFirestore();
        e.preventDefault()
        const ventasCollection = collection(db,"ventas")
        addDoc(ventasCollection,{
           client,
            items: cart,
            total: totalProductos(),
            date: serverTimestamp()
        })
        .then((res) =>{
            setOrderId(res.id)
            clearCart()
        })
        .catch((error) => console.log("error"))
      }



    return (
    <>
        
 { !orderId   

     ?<div>
            
             <form onSubmit={terminarCompra} style={{marginTop:'50px'}}>
              <h2>Ingrese sus datos</h2>
                 <input type="text" required placeholder='Nombre y apellido' name='name'onChange={datosClient} />
                 <input type="number"  placeholder='Numero de contacto' name='telefono'onChange={datosClient} />
                 <input type="email"  placeholder='ejemplo@gmail.com' name='email'onChange={datosClient}/>
                 <button type='submit'>Finalizar Compra</button>
             </form>
         </div>
       :  <div style={{marginTop:'50px'}}>
        <h2>Gracias por su compra</h2>
        <h3>Su orden es: {orderId}</h3>
      <Link to={"/"}><button>Volver al inicio</button></Link>  
    </div>}
         </>
)
}

export default Checkout