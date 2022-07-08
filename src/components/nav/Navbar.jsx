import { NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { logoutApi } from "../../helpers/apiCalls";
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
      <NavLink
        to="/signup"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Signup
      </NavLink>
      {!user && (
        <NavLink
          to="/login"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Login
        </NavLink>
      )}
      {user && (
        <NavLink
          onClick={handleLogout}
          to="#"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Logout
        </NavLink>
      )}
      <NavLink className="apply" to="/apply">
        Apply now
      </NavLink>
    </nav>
  );
};
