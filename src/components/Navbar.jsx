import { NavLink } from "react-router-dom";
import "../App.scss";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" 
            className={(navData) => (navData.isActive ? "active" : "none")} end
      >Home</NavLink>
      <NavLink to="/courses" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >Courses</NavLink>
      <NavLink to="teachers" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >Teachers</NavLink>
      <NavLink to="/funding" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >Funding</NavLink>
      <NavLink to="/career" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >Career</NavLink>
      <NavLink to="/about" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >About</NavLink>
      <NavLink to="/blog" 
            className={(navData) => (navData.isActive ? "active" : "none")}
      >Blog</NavLink>
      <NavLink className="apply" to="/apply">Apply 
            className={(navData) => (navData.isActive ? "active" : "none")}
        Now</NavLink>
    </nav>
  );
};
