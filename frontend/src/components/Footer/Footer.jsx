import "./Footer.css";
import logoWhite from "../../assets/logo_kasa_white.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Logo Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;