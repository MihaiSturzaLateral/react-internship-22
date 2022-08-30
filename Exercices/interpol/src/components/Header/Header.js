import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import './Header.css'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg"  >
      <Container fluid style={{ backgroundColor:"	#181818"}}>
        <Navbar.Brand href="#" style={{ color:"	red"}}>Most WANTED</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Link to="/" className="text-link">
            Home
          </Link>
          <Link to="/check" className="text-link" >
            Check Tool
          </Link>
           
          </Nav>
             <label style={{ color:"white"}}>My reports</label>
            <button >Submit Report</button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;