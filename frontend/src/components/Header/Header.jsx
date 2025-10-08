import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;