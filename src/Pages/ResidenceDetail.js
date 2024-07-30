import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import propertiesData from '../propertiesData';

const ResidenceDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    const foundProperty = propertiesData.find(prop => prop.id === parseInt(id));
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Image src={property.image} fluid />
          <h3>{property.title}</h3>
          <p>${property.price}</p>
          <p>{property.description}</p>
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
