
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
import "./components/ItemList/ItemList.css"
import "./components/ItemDetail/ItemDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
function App() {

  
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

      </Routes>
      </CartProvider>
    </BrowserRouter>
  )

}

export default App;
