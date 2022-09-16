import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import ModalPageFormik from "../Pages/ModalPageFormik/ModalPageFormik";

const NavbarComp = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand
          style={{
            color: "red",
            fontWeight: "bold",
            marginLeft: "20px",
            letterSpacing: "2px",
          }}
        >
          MostWANTED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/checktoolpage"}>
              Check Tool
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/myreportspage"}>
              My reports
            </Nav.Link>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                marginRight: "20px",
                border: "none",
              }}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Submit report
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      {openModal && <ModalPageFormik closeModal={setOpenModal} />}
    </>
  );
};
export default NavbarComp;
