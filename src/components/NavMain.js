import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/NavMain.scss";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <div className="container">
        <div className="logo">
          <h1>E</h1>
          <h4>Elisa</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="links">
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
                to="/projects"
                className={(navData) => (navData.isActive ? "active" : "none")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={(navData) => (navData.isActive ? "active" : "none")}
              >
                Skills
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
                to="/contact"
                className={(navData) => (navData.isActive ? "active" : "none")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="item_icon">
          <div className="icon">
            <FaLinkedin
            // onClick={() => handleClickButton(item.id)}
            // role="button"
            // tabIndex="0"
            />
            <FaGithub />
            <FaInfoCircle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
