import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <div className="menu">
      <h1>WorldEarthQuakes</h1>
    <ul className="nav">
      <li>
        <Link to='/' className="text-link">Home</Link>
      </li>
      <li>
        <Link to='/about' className="text-link">About</Link>
      </li>
      <li>
        <Link to='/contact' className="text-link">Contact</Link>
      </li>
    </ul>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{'margin-left':'2em'}}
            />
            <Button variant="outline-success"  style={{'backgroundColor':'white'}}>Search</Button>
          </Form>
    </div>
  );
};

export default Header;


// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
//  import 'bootstrap/dist/css/bootstrap.css';

// function Header() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">WorldEarthQuakes</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//            <Link to='/' className="text-link">Home</Link>
//            <Link to='/about' className="text-link">About</Link>
//            <Link to='/about' className="text-link">About</Link>
//            <Link to='/contact' className="text-link">Contact</Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;