import React from "react"
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";


const ItemListContainer = () => {
    const onAdd = ()=> {
        console.log("Compra finalizada")
     }
    return (
        <div className="itemList" style={{marginTop: 30}}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>
          Aca va a ir un producto
        </Card.Text>
        <ItemCount initial = {0} stock = {10} onAdd = {onAdd} />
      </Card.Body>
    </Card>
</div>
    )
}

export default ItemListContainer
console.log(ItemListContainer)