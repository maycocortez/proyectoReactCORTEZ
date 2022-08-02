import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { data } from "../mock/FakeApi"
import { useParams } from "react-router-dom";



 const ItemListContainer = () => {
  const [catalogoProductos,setCatalogoProductos] = useState([])
  const[mensaje, setMensaje] = useState(false)
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    data
      .then((res) => {
        if (!categoriaId) {
          setCatalogoProductos(res);
        } else {
          setCatalogoProductos(res.filter((item) => item.category === categoriaId));
        }
      })
      .catch(() => setMensaje('hubo un error, intente nuevamente más tarde'))
      .finally(() => setCargando(false));
  }, [categoriaId]);
  return (
    <div className='containerGlobal'>
      {mensaje && <p>{mensaje}</p>}
      {cargando ? (
        <p>Loading...</p>
      ) : (
        <ItemList catalogoProductos={catalogoProductos} />
      )}
    </div>
  );
};



export default ItemListContainer
