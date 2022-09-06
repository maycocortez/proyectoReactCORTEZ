
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
import "./components/ItemList/ItemList.css"
import "./components/ItemDetail/ItemDetail.css"
import "./components/Cart/Cart.css"
import "./components/Checkout/Checkout.css"
import "./components/Cart/ItemCart.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from "./components/Checkout/Checkout"

function App() {

  /*useEffect(()=> {
const productsCollections = collection (db,"productos")
productos.map((item) => addDoc(productsCollections,item))
},[])*/
  
  return (
    <BrowserRouter>
      <CartProvider>
       <NavBar/>
    <Routes>
      <Route path ='/' element={<ItemListContainer />} />
      <Route path='/categoria/:categoriaId' element={<ItemListContainer  />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />   
      <Route path = '/cart' element={<Cart />} /> 
      <Route path='*' element={ <Navigate to='/' /> } />
      <Route path = '/checkout' element={<Checkout/>} /> 

      </Routes>
      </CartProvider>
    </BrowserRouter>
  )

}

export default App;
