import { NavLink } from "react-router-dom";
import "../App.scss";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="teachers">Teachers</NavLink>
      <NavLink to="/funding">Funding</NavLink>
      <NavLink to="/career">Career</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink className="apply" to="/apply">Apply Now</NavLink>
    </nav>
  );
};
