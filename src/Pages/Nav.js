import logo from "../logo.9a3d2645.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
