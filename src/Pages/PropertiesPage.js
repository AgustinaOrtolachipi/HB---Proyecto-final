import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addToFavorites } from '../actions/Actions';
import './PropertiesPage.css';

const PropertiesPage = ({ properties }) => {
  const dispatch = useDispatch();
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  const handleAddToFavorites = (property) => {
    dispatch(addToFavorites(property));
    setFavoriteProperties([...favoriteProperties, property.id]);
  };

  return (
    <Container className="properties-page">
      <h2>Propiedades</h2>
      <Row>
        {properties.map((property) => (
          <Col key={property.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                {favoriteProperties.includes(property.id) ? (
                  <Button disabled className="btn btn-secondary">
                    Agregado a Favoritos
                  </Button>
                ) : (
                  <Button onClick={() => handleAddToFavorites(property)} className="btn btn-primary">
                    Agregar a Favoritos
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertiesPage;
