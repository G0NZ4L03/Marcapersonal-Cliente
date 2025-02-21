import React from 'react';
import './Home.css';
import empresa from "../../assets/empresa.jpg";
import cole from "../../assets/cole.jpg";
import alumnos from "../../assets/alumnos.jpg";

const Home = () => {
    return (
        <div className="container">
        <div className='row'>

            <div col-4>
            <Link to="/Paginas/Empresa/Empresa.jsx"> 
                    <img  className="imagen img-fluid mx-auto d-block" src={empresa} alt="empresa"  />
            </Link>
            </div>

            <div col-4>
                <a href="#">
                    <img className="imagen img-fluid mx-auto d-block"  src={cole} alt="colegio"  />
                </a>
            </div>

            <div col-4>
                <a href="#">
                    <img className="imagen img-fluid mx-auto d-block" src={alumnos} alt="alumnos"  />
                </a>

            </div>

        </div>
    </div>
    )
}
export default Home;