import React from 'react';
import './MenuEmpresa.css';
import { Link } from 'react-router-dom';

const MenuEmpresa = () => {
    return (
        <nav className="menu-empresa">
            <ul>
                <li>
                    {/* Esto hay que traducirlo */}
                    <Link to="/empresa"> [ Empresa ]</Link>
                </li>
                <li>
                    <Link to="/empresa/proyectos"> [ Proyectos ]</Link>
                </li>
                <li>
                    <Link to="/empresa/alumnos"> [ Alumnos ]</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuEmpresa;