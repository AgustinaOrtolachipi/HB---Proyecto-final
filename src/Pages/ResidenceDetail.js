import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';

const ResidenceDetail = () => {
  const [date, setDate] = useState('');

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Image src="property-image.jpg" fluid />
          <h3>Cabaña de otoño</h3>
          <p>$3800</p>
          <p>3 Habitaciones, 2 Baños, Parking</p>
          <p>
          Gran oportunidad para alquilar la casa de sus sueños en la base de Mummy Mountain en Ciudad Del Paraiso. Ubicado en una calle apartada en el lado norte de la montaña.
          </p>
        </Col>
        <Col md={4}>
          <h4>Seleccione su fecha de visita</h4>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Book visit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResidenceDetail;
