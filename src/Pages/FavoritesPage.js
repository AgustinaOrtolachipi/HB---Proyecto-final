import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FavoritesPage = () => {
  const favoriteProperties = [
    {
      image: 'property1.jpg',
      title: 'The Johnson ...',
      price: '$5000',
      description: 'This is an amazing place to live with all facilities around you.',
    },
    {
      image: 'property2.jpg',
      title: 'Jansheen villan',
      price: '$8000',
      description: 'Villa is a marvelous piece of luxury and art. Decorated with two helipads, wi...',
    },
  ];

  return (
    <Container>
      <Row>
        {favoriteProperties.map((property, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.price}</Card.Text>
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
