import "./Cabecera.css";
import logo from "../../assets/mp-logoNaranja100.png";
import banderaEspañol from "../../assets/flag-for-flag-spain-svgrepo-com.svg"
import banderaIngles from "../../assets/united-kingdom-uk-svgrepo-com.svg"
import { Link } from "react-router-dom";


const Cabecera = () => {
  return (

    <nav className="container">
      <div className="row">
        <nav>
          {/* redirigir al home */}
          <div className="col-12 col-sm-6 col-md-4 logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 titulo">

            <h1>Marca Personal FP</h1>
          </div>
          <div className="col-12 col-sm-6 col-md-4 flag-container">

            <div className="banderas">
              <a href="#">
                <img src={banderaEspañol} alt="Bandera de España" className="banderaEsp" />
              </a>
              <a href="#">
                <img src={banderaIngles} alt="Bandera de Inglaterra" className="banderaEng" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};
export default Cabecera;
