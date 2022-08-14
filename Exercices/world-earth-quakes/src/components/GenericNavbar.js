import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar ">
        <div className="container-sm">
          <div className="left-side ">
            <div className="logo">WorldEarthQuakes</div>
            <div className="nav-items">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/pages/About/About" className="nav-link">
                About
              </Link>

              <Link to="/pages/Contact/Contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
