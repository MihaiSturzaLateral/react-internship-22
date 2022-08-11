import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <ul className="list">
          <li>
            <Link className="listItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="listItem" to="/photos">
              Photos
            </Link>
          </li>
          <li>
            <Link className="listItem" to="/comments">
              Comments
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
