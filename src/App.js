
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css'
import "./components/ItemList.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConainer from './components/ItemListContainer'


function App() {

  
  return (
   <>
   <div className='App'>
      <NavBar/>
      
      <ItemListConainer nombre="Gonzalo">Hola</ItemListConainer>
      </div>
      </>
  )

}

export default App;
