import { NavLink } from "react-router-dom";
import "../styles/NavMain.scss";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
