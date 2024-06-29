import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container>
      <h2>Contactanos</h2>
      <p>Contactarnos es muy fácil</p>
      <Row>
        <Col md={6}>
          <Button variant="primary" block>Llamanos</Button>
          <Button variant="secondary" block>Chatea con nosotros</Button>
        </Col>
        <Col md={6}>
          <Button variant="primary" block>Videollamada</Button>
          <Button variant="secondary" block>Mensaje</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
