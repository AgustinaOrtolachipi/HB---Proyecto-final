// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Importa el archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/faq">Preguntas frecuentes</a></li>
              <li><a href="/about-us">Quiénes somos</a></li>
              {/* Agrega más enlaces según sea necesario */}
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              {/* Agrega más redes sociales si es necesario */}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <address>
              {/* Agrega información de contacto si es necesario */}
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
