import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">F&B</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <NavDropdown title="" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Makanan</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Minuman</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cemilan</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent;