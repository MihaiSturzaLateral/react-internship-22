import React from "react";
import { Link } from "react-router-dom";
function NavBar({ title, classN, btn, path }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">{title}</div>
          <div className="d-flex">
            <Link to={path} className={classN}>
              {btn}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
