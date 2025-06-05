import { useState } from 'react'
import Cabecera from './Componentes/Cabecera/Cabecera.jsx'
import Home from './Paginas/Home/Home.jsx'
import Empresa from './Paginas/Empresa/Empresa.jsx'
import Colegio from './Paginas/Colegio/Colegio.jsx'
import Alumnos from './Paginas/Alumnos/Alumnos.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/colegio" element={<Colegio />} />
        <Route path="/alumnos" element={<Alumnos />} />
      </Routes>
    </>
  )
}

export default App
