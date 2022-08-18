import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import {collection,getDocs,getFirestore,query,where,} from 'firebase/firestore';


 const ItemListContainer = () => {
  const [catalogoProductos,setCatalogoProductos] = useState([])
  const[mensaje, setMensaje] = useState(false)
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, `items`);

    if (categoriaId) {
      const q = query(itemsCollection, where(`category`, `==`, categoriaId));
      getDocs(q)
        .then((snapshot) => {
          setCatalogoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch(() => setMensaje('Error. Intente mas tarde'))
        .finally(() => setCargando(false));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setCatalogoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch(() => setMensaje('Error. Intente mas tarde'))
        .finally(() => setCargando(false));
    }
  }, [categoriaId]);
  return (
    <div>
  
      {cargando ? (
        <p>Loading...</p>
      ) : (
        <ItemList catalogoProductos={catalogoProductos} />
      )}
    </div>
  );
};



export default ItemListContainer
