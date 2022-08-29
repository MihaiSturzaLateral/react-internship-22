import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="container-sm">
        <div className="left-nav">
          <div className="logo">WorldEarthQuakes</div>
          <div className="navItems">
            <Link to="/" className="NavLink">
              Home
            </Link>
            <Link to="/about" className="NavLink">
              About
            </Link>
            <Link to="/contact" className="NavLink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
