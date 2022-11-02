import { NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { logoutApi } from "../../helpers/apiCalls";
import { MdPersonOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import CV from "../../assets/cv.pdf";
import { TbDownload } from "react-icons/tb";

import "./Navbar.scss";

export const Navbar = () => {
  const { user, setUser } = useDataContext();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser();
    logoutApi();
    navigate("/login");
  };

  return (
    <nav>
      <NavLink
        to="/"
        // className={(navData) => (navData.isActive ? "active" : "none")}
        end
      >
        Home
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="employees">Employees</NavLink>
      <NavLink to="teachers">Teachers</NavLink>
      {user && <NavLink to="/users">Users</NavLink>}
      {user?.role === "admin" && <NavLink to="/members">Members</NavLink>}

      {/* <NavLink
        to="/signup"
      >
        Signup
      </NavLink> */}

      <div className="icons">
        {!user && (
          <NavLink to="/login">
            <MdPersonOutline className="icon"></MdPersonOutline>
            {/* Login */}
          </NavLink>
        )}
        {user && (
          <NavLink onClick={handleLogout} to="#">
            <MdLogout className="icon"></MdLogout>
            {/* Logout */}
          </NavLink>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <span>
          <NavLink className="apply" to="/signup">
            Apply now
          </NavLink>
        </span>
        <span>
          <a href={CV} download className="apply">
            Download CV
          </a>
        </span>
      </div>
    </nav>
  );
};
