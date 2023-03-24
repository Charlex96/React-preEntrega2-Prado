
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Compras from './components/Compras/Compras'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (

    <ShoppingCartProvider>

      <BrowserRouter>
      
        <NavBar/>

        <Routes>
        
          <Route exact path='/'                   element={<Welcome/>}></Route>
          <Route exact path="/catalogue"          element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />}/>

          <Route exact path="/item/:id"           element={<ItemDetailContainer />} />
          <Route exact path="/cart"               element={<Cart />} />
          <Route exact path="/compras"               element={<Compras />} />

        </Routes>

        
      </BrowserRouter>
      
    </ShoppingCartProvider>


  )
}

export default App
