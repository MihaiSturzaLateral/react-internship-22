import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const classes = 'btn btn-primary'
  const [activeBtn, setActiveBtn] = useState("first");

  const clickedButtonHandler = (e) => {
    const { name } = e.target;
    setActiveBtn(name);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="d-flex flex-row gap-4 text-center w-100 justify-content-center">
        <NavLink
          name="first"
          // className={activeBtn ? `${activeBtn}` : "btn btn-primary"}
          className={activeBtn ? `btn btn-primary` : ""}
          onClick={clickedButtonHandler}
          to="/"
        >
          Create
        </NavLink>
        <NavLink
          name="second"
          // className={activeBtn ? `${activeBtn}` : "btn btn-primary"}
          className={activeBtn ? `btn btn-primary` : ""}
          onClick={clickedButtonHandler}
          to="/read"
        >
          Read
        </NavLink>
      </ul>
    </nav>
  );
}
