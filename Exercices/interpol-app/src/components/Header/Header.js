import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "../Modal/ModalForm";
import { useState } from "react";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getModalState = (modalState) => {
    setModalIsOpen(modalState);
  };

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ color: "	red" }}>MostWANTED</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/checktool">
                Check Tool
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/myreports">
                My reports
              </Nav.Link>
              <Button
                onClick={() => setModalIsOpen(true)}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "#ff0000",
                  border: "none",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              >
                Submit Report
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalForm getModalState={getModalState} modalIsOpen={modalIsOpen} />
    </>
  );
};

export default Header;
