import { NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { logoutApi } from "../../helpers/apiCalls";
import { MdPersonOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
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
        className={(navData) => (navData.isActive ? "active" : "none")}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Courses
      </NavLink>
      <NavLink
        to="employees"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Employees
      </NavLink>
      <NavLink
        to="teachers"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Teachers
      </NavLink>
      <NavLink
        to="/projects"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Projects
      </NavLink>
      <NavLink
        to="/funding"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Funding
      </NavLink>
      <NavLink
        to="/career"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Career
      </NavLink>

      {user && <NavLink to="/users">Users</NavLink>}
      {user?.role ==="admin" && <NavLink to="/members">Members</NavLink>}

      {/* <NavLink
        to="/signup"
        className={(navData) => (navData.isActive ? "active" : "none")}
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

      <NavLink className="apply" to="/signup">
        Apply now
      </NavLink>
    </nav>
  );
};
