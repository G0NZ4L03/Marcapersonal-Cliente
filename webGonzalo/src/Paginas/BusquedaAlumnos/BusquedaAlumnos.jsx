import React from "react";
import "./BusquedaAlumnos.css";
import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa.jsx";
import ListaPerfilesCompetenciales from "../../Componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales.jsx";
import ListaFamiliasProfesionales from "../../Componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales.jsx";
import ResultadosBusquedaAlumnos from "../../Componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos.jsx";
import AlumnoMinCard from "../../Componentes/AlumnoMinCard/AlumnoMinCard.jsx";

const BusquedaAlumnos = () => {

    return (
        <div className="busqueda-alumnos">
            <MenuEmpresa />
            <ListaPerfilesCompetenciales />
            <ListaFamiliasProfesionales />
            <ResultadosBusquedaAlumnos />
            <AlumnoMinCard />
        </div>
    );
}
export default BusquedaAlumnos;