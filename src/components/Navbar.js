import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/" className="text-white">
        <img
          src="/images/logo.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/properties" className="text-white">Propiedades</Nav.Link>
          <Nav.Link as={Link} to="/contact-us" className="text-white">Contáctanos</Nav.Link>
          <Nav.Link as={Link} to="/add-property" className="text-white">Agregar Propiedad</Nav.Link>
          <Nav.Link as={Link} to="/favorites" className="text-white">Favoritos</Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
