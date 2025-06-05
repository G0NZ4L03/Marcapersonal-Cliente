import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import empresa from "../../assets/empresa.jpg";
import cole from "../../assets/cole.jpg";
import alumnos from "../../assets/alumnos.jpg";

const Home = () => {
    return (
        <div className="container">
            <div className='row'>

                <div className="col-4">
                    <Link to="/empresa">
                        <img className="imagen img-fluid mx-auto d-block" src={empresa} alt="empresa" />
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/colegio">
                        <img className="imagen img-fluid mx-auto d-block" src={cole} alt="colegio" />
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/alumnos">
                        <img className="imagen img-fluid mx-auto d-block" src={alumnos} alt="alumnos" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Home;