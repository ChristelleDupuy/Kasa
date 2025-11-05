import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo_kasa.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;