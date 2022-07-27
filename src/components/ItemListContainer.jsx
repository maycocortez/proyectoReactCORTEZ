import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import { data } from "./mock/FakeApi";


const ItemListContainer = () => {
  const [catalogoProductos,setCatalogoProductos] = useState([])
  const[mensaje, setMensaje] = useState(false)
    const onAdd = ()=> {
        console.log("Compra finalizada")
     }

     
     

     





    useEffect(()=>{
      
      data
      .then((res)=> setCatalogoProductos(res)) //si la promesa se cumple
      .catch(()=>setMensaje("hubo un error. intente mas tarde")) //aca iria el error. con catch definimos el mensaje que diga que hubo un error
     
    }, [])

    return (

        <div className="itemList" style={{marginTop: 30}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>

        </Card.Text>
        <ItemCount initial = {0} stock = {10} onAdd = {onAdd} />
      </Card.Body>
    </Card>
    <ItemList catalogoProductos={catalogoProductos}/>

</div>
    )
}

export default ItemListContainer
