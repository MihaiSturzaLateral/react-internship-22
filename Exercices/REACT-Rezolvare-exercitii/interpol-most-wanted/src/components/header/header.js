import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">MostWANTED</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/checkTool">Check Tool</NavLink>
          </li>
          <li>
            <NavLink to="/myReports">My reports</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
