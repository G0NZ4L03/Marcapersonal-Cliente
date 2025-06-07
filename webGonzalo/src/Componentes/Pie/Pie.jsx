import React from 'react';
import './Pie.css'; // Asegúrate de tener un archivo CSS para estilos

const Pie = () => {
    return (
        <footer>
            {/* Añadir información del endpoint */}
            
            <p>© 2025 MarcaPersonalGonzalo. Todos los derechos reservados.</p>
            {/* Iconos de redes sociales: */}
            <div className='iconos'>
                <a href="https://www.facebook.com/cifpcarlos3" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com/cifpcarlos3" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/cifpcarlos3" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/@cifpcarlos3" target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href="https://www.youtube.com/c/cifpcarlosiiicartagena" target="_blank" rel="noopener noreferrer">YouTube</a>

            </div>
        </footer>
    );
};

export default Pie;