import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/Contact" className="link">Contact</Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
