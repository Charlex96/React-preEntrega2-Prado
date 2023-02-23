
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (

    <BrowserRouter>
    
      <NavBar/>

      <Routes>
      
        <Route exact path='/'                   element={<Welcome/>}></Route>
        <Route exact path="/catalogue"          element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />}/>

        <Route exact path="/item/:id"           element={<ItemDetailContainer />} />
        {/* <Route exact path="/cart"               element={<Cart />} /> */}

      </Routes>

      
    </BrowserRouter>

  )
}

export default App
