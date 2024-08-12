import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
