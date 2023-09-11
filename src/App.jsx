import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemsContainerList/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:cid' element={<ItemListContainer />}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
