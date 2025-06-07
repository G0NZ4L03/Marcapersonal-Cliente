import { useState } from 'react'
import Cabecera from './Componentes/Cabecera/Cabecera.jsx'
import Home from './Paginas/Home/Home.jsx'
import Empresa from './Paginas/Empresa/Empresa.jsx'
import Centroeducativo from './Paginas/CentroEducativo/CentroEducativo.jsx'
import Alumnos from './Paginas/Alumnos/Alumnos.jsx'
import { Routes, Route } from 'react-router-dom'
import BusquedaAlumnos from './Paginas/BusquedaAlumnos/BusquedaAlumnos.jsx'
import BusquedaProyectos from './Paginas/BusquedaProyectos/BusquedaProyectos.jsx'

function App() {

  return (
    <>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/CentroEducativo" element={<Centroeducativo />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/empresa/alumnos" element={<BusquedaAlumnos />} />
        <Route path="/empresa/proyectos" element={<BusquedaProyectos />} />
      </Routes>
    </>
  )
}

export default App
