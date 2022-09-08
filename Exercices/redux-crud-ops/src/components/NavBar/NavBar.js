import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <ul className="list">
        <Link className="lnk" to="/">
          <li className="list-item">Home</li>
        </Link>
        <Link className="lnk" to="/create">
          <li className="list-item">Create</li>
        </Link>
        <Link className="lnk" to="/read">
          <li className="list-item">Read</li>
        </Link>
        <Link className="lnk" to="/update">
          <li className="list-item">Update</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
