import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <Container fluid className="contact-us-page">
      <Row className="justify-content-center text-center">
        <Col md={12}>
          <p className="section-subtitle">Contactanos</p>
          <p className="section-description">
            Siempre estamos listos para ayudar proporcionándote los mejores servicios. Creemos que un buen lugar para vivir puede hacer tu vida mejor.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className="text-center">
          <div className="contact-method">
            <i className="fas fa-phone contact-icon"></i>
            <Button className="btn btn-primary contact-button" href="tel:+123456789">Llamar</Button>
          </div>
        </Col>
        <Col md={3} className="text-center">
          <div className="contact-method">
            <i className="fas fa-video contact-icon"></i>
            <Button className="btn btn-primary contact-button" href="https://meet.google.com/fjx-yufc-jtb" target="_blank">Video Llamada</Button>
          </div>
        </Col>
        <Col md={3} className="text-center">
          <div className="contact-method">
            <i className="fas fa-comments contact-icon"></i>
            <Button className="btn btn-primary contact-button" href="https://wa.me/123456789" target="_blank">WhatsApp</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

