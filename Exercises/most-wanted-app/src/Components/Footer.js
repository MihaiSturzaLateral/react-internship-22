import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark"  fixed="bottom">
        <Container>
          <Navbar.Brand>Data Source: Interpol Wanted lists</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ marginLeft: "20%" }}>
              Red Notices are issued for fugitives wanted either for prosecution
              or to serve a sentece. A Red Notice is a request to law
              enforcement worldwide to locate and provisionally arrest a person
              pending extradition, surrender or similar legal action.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
