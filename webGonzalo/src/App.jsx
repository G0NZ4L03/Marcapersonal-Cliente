import { useState } from 'react'
import './Componentes/Cabecera/Cabecera.jsx'
import Cabecera from './Componentes/Cabecera/Cabecera.jsx'
import Home from './Paginas/Home/Home.jsx'
import { Route } from 'react-router-dom'
import Empresa from './Paginas/Empresa/Empresa.jsx'

function App() {

  return (
    <>
      <Cabecera />
      <Home />
      <Route path="/Empresa/Empresa.jsx"
        element={<Empresa></Empresa>}>
      </Route>
    </>
  )
}

export default App
