import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Outlet, NavLink } from "react-router-dom";
import FormikModal from "../pages/modal/Modal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getModalState = (modalState) => {
    setModalIsOpen(modalState);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo">MostWANTED</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/checkTool">
                Check Tool
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/myReports">
                My reports
              </Nav.Link>
              <Button variant="danger" onClick={() => setModalIsOpen(true)}>
                Submit Report
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FormikModal getModalState={getModalState} modalIsOpen={modalIsOpen} />
      <Outlet />
    </>
  );
};
export default Header;
