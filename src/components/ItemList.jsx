import Item from "./Item"
const ItemList = ({catalogoProductos}) => {
    return (
      <div className="itemList">
          {catalogoProductos.map((producto)=> <Item key={producto.id}  producto={producto}/>)}
      </div>
    )
  }
  
  export default ItemList