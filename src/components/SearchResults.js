import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchResults = ({ properties }) => {
  return (
    <Row>
      {properties.map((property, index) => (
        <Col key={index} md={4}>
          <Card>
            <Card.Img variant="top" src={property.image} />
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>${property.price}</Card.Text>
              <Card.Text>{property.description}</Card.Text>
              <Card.Text>{property.location}</Card.Text>
              <Link to={`/property/${property.id}`} className="btn btn-primary">
                Ver detalles
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SearchResults;
