import { useEffect, useState } from 'react';
import { data, getItem } from './mock/FakeApi';
import ItemDetail from './ItemDetail';
export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
      getItem
        .then((res) => setProducto(res.find((item) => item.id === '03')))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false));
    }, []);
    return (
      <>
        <div>Detalle del producto</div>
        <div>
          {cargando ? <p>Cargando...</p> : <ItemDetail producto={producto} />}
        </div>
      </>
    );
  };
  
  export default ItemDetailContainer;