import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import propertiesData from '../propertiesData';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id.toString() === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Image src={property.image} fluid />
          <h3>{property.title}</h3>
          <p>${property.price}</p>
          <p>{property.description}</p>
          <p>{property.location}</p>
        </Col>
        <Col md={4}>
          <h4>Details</h4>
          <p>City: {property.city}</p>
          <p>Country: {property.country}</p>
          <Link to="/">
            <Button variant="primary" className="mt-3">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetail;
