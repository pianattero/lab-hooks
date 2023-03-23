import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../../../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-body bg-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/posts"} aria-current="page">
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={toggleTheme}>
                Toggle Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
