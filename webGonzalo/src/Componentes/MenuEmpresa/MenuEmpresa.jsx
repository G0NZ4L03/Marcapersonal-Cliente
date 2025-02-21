import React from 'react';

const MenuEmpresa = () => {
    return (
        <nav>
            <ul>
                <li>
                    {/* Esto hay que traducirlo */}
                    <Link to="/Paginas/Empresa/Empresa.jsx"> 
                    Empresa
                    </Link> 
                </li>
                <li>
                    <a href="">Colegio</a>
                </li>
                <li>
                    <a href="#">Alumnos</a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuEmpresa;