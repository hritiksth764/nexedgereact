import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="nav-left">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="NexEdge Logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
