import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
function NavBar() {
  const [isActive, setisActive] = React.useState(false);
  const showNav = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <div>
        <nav className="navbar is-gray has-shadow">
          <div className="navbar-brand ">
            <Link to="/" className="navbar-item">
              <label>Duke✨</label>
            </Link>
            <a
              onClick={showNav}
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end pr-3">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/news" className="navbar-item">
                News
              </Link>
              <Link to="/gist" className="navbar-item">
                Gist
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
