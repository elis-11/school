import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="teachers">Teachers</NavLink>
  </nav>
)
}
