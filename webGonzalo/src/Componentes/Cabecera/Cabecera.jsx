import "./Cabecera.css";
import logo from "../../assets/mp-logoNaranja100.png";
import banderaEspañol from "../../assets/flag-for-flag-spain-svgrepo-com.svg"
import banderaIngles from "../../assets/united-kingdom-uk-svgrepo-com.svg"

const Cabecera = () => {
  return (
    <header className="bg-dark text-white text-center fixed-top py-2 d-flex align-items-center">
      <a href="#">
        <img src={logo} alt="Logo" className="logo-img" />
      </a>
      <h1>Marca Personal FP</h1>

      <div className="banderas">
        <a href="#">
          <img src={banderaEspañol} alt="Bandera de España" className="banderaEsp" />
        </a>
        <a href="#">
          <img src={banderaIngles} alt="Bandera de Inglaterra" className="banderaEng" />
        </a>
      </div>

    </header>
  );
};
export default Cabecera;
