import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/pages/Photos/Photos"
                >
                  Photos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pages/Comments/Comments">
                  Comments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
