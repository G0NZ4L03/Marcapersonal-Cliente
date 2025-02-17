import React from 'react';
import './Home.css';
import empresa from "../../assets/empresa.jpg";
import cole from "../../assets/cole.jpg";
import alumnos from "../../assets/alumnos.jpg";

const Home = () => {
    return (
        <div className='row'>

            <div col-4>
                <a href="#">
                    <img src={empresa} alt="empresa" className="imagenes" />
                </a>
            </div>

            <div col-4>
                <a href="#">
                    <img src={cole} alt="colegio" className="imagenes" />
                </a>
            </div>

            <div col-4>
                <a href="#">
                    <img src={alumnos} alt="alumnos" className="imagenes" />
                </a>

            </div>

        </div>
    )
}
export default Home;