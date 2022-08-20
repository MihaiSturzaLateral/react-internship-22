import { Outlet, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          WorldEarthQuakes
        </Link>
        <br></br>
        <div onClick={handleClick} className="nav-icon">
          {" "}
          {open ? <FiX /> : <FiMenu />}
        </div>
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
