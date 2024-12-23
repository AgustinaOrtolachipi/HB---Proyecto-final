import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { removeFromFavorites } from '../actions/Actions';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemoveFromFavorites = (propertyId) => {
    dispatch(removeFromFavorites(propertyId));
  };

  return (
    <Container className="favorites-page">
      <h2>Favoritos</h2>
      <Row>
        {favorites.map((property) => (
          <Col key={property.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Button onClick={() => handleRemoveFromFavorites(property.id)} className="btn btn-danger">
                  Eliminar de Favoritos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
