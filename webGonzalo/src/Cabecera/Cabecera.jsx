import "./Cabecera.css";
import logo from "../assets/mp-logoNaranja100.png";

const Cabecera = () => {
  return (
    <header className="bg-dark text-white text-center fixed-top py-2 d-flex align-items-center">
      <a href="#">
        <img src={logo} alt="Logo" className="logo-img" />
      </a>
      <h1>Marca Personal FP</h1>
    </header>
  );
};
export default Cabecera;
