import React from "react";
import "./BusquedaProyectos.css";
import Menu from "../../Componentes/MenuEmpresa/MenuEmpresa.jsx";
import ListaFamiliasProfesionales from "../../Componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales.jsx";
import ProyectoMinCard from "../../Componentes/ProyectoMinCard/ProyectoMinCard.jsx";
import ResultadoBusquedaProyectos from "../../Componentes/ResultadoBusquedaProyectos/ResultadoBusquedaProyectos.jsx";

const BusquedaProyectos = () => {


    return (
        <div className="busqueda-proyectos">
            <Menu />
            <ListaFamiliasProfesionales />
            <ResultadoBusquedaProyectos />
            <ProyectoMinCard />
        </div>
    );
}
export default BusquedaProyectos;