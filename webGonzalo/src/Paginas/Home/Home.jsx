import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import empresa from "../../assets/empresa.jpg";
import cole from "../../assets/cole.jpg";
import alumnos from "../../assets/alumnos.jpg";
import Pie from '../../Componentes/Pie/Pie.jsx';

const Home = () => {
    return (
        <div className="container">
            <div className='row'>

                <div className="col-4">
                    <Link to="/empresa" className="img-hover-container">
                        <img className="imagen" src={empresa} alt="empresa" />
                        <span className="textoHover">Empresas</span>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/centroEducativo" className="img-hover-container">
                        <img className="imagen" src={cole} alt="CentroEducativo" />
                        <span className="textoHover">Centro Educativo</span>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/alumnos" className="img-hover-container">
                        <img className="imagen" src={alumnos} alt="alumnos" />
                        <span className="textoHover">Alumnos</span>
                    </Link>
                </div>

            </div>

            <Pie />
            
        </div>
    )
}
export default Home;