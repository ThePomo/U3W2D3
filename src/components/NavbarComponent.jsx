import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Netflix Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="search-icon d-flex align-items-center">
            <Nav.Link href="#" className="navbar-avatar me-3">
              <img src={avatar} alt="Avatar" className="navbar-avatar" />
            </Nav.Link>

            <NavDropdown
              title=""
              id="basic-nav-dropdown"
              align="end"
              className="p-2"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Account Page
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sign out of Netflix</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
