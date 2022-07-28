import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import { data } from "./mock/FakeApi";


 const ItemListContainer = () => {
  const [catalogoProductos,setCatalogoProductos] = useState([])
  const[mensaje, setMensaje] = useState(false)
 


    useEffect(()=>{
      
      data
      .then((res)=> setCatalogoProductos(res)) 
      .catch(()=>setMensaje("hubo un error. intente mas tarde")) 
     
    }, [])

    return (

        <div className="itemList" style={{marginTop: 30}}>

    <ItemList catalogoProductos={catalogoProductos}/>

</div>
    )
}

export default ItemListContainer
