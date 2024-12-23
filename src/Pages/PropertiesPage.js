import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link
import { addToFavorites } from '../actions/Actions';
import './PropertiesPage.css';
import SearchBar from '../components/SearchBar';


const PropertiesPage = ({ properties }) => {
  const dispatch = useDispatch();
  const favoriteProperties = useSelector((state) => state.favorites.favorites);

  const handleAddToFavorites = (property) => {
    dispatch(addToFavorites(property));
  };

  return (
    <Container className="properties-page">
      <h2>Propiedades</h2>
      <SearchBar /> {/* Añade el componente SearchBar aquí */}
      <Row>
        {properties.map((property) => (
          <Col key={property.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Link to={`/residence-detail/${property.id}`}>
                  <Button variant="primary">Ver Detalles</Button>
                </Link>
                {Array.isArray(favoriteProperties) && favoriteProperties.some(fav => fav.id === property.id) ? (
                  <Button disabled className="btn btn-secondary mt-2">
                    Agregado a Favoritos
                  </Button>
                ) : (
                  <Button onClick={() => handleAddToFavorites(property)} className="btn btn-primary mt-2">
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
