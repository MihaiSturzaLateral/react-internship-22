import { Modal } from "bootstrap";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <nav className="nav ">
      <div className="logolinks d-flex">
        <h4 style={{ color: "red" }}>MostWanted</h4>
        <ul className="d-flex gap-2 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/check">Check Tool</NavLink>
          </li>
        </ul>
      </div>
      <div className="my-reports d-flex gap-3">
        <h4>My reports</h4>
        <button
          style={{ color: "lightgrey" }}
          className="btn btn-danger text-white"
          // onClick={() => setModalOpen(true)}
        >
          Submit Report
        </button>
        {/* {modalOpen && <Modal />} */}
      </div>
    </nav>
  );
};

export default Navbar;
