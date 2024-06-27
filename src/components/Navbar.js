import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './Logo.png'; 

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo} 
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ marginRight: '600px' }}
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Propiedades</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-property">
              <Nav.Link>Agregar Propiedad</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
              <Nav.Link>Contáctanos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
