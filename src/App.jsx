import { useState } from 'react'

import NavBar from './components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Saludo from './components/ItemsContainerList/Saludo';

function App() {
  return (
    <>
    <NavBar />
    <Saludo saludo='Esto es un saludo' />
    </>
  )
}

export default App
