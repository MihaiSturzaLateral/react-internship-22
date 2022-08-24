import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">WorldEarthQuakes</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/read">Read</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
