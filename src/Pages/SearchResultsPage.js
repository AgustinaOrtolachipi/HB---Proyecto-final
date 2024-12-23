import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = ({ properties }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') ? searchParams.get('query').toLowerCase() : '';
  const type = searchParams.get('type') ? searchParams.get('type').toLowerCase() : '';
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')) : 0;
  const maxPrice = searchParams.get('maxPrice') ? parseFloat(searchParams.get('maxPrice')) : Infinity;

  const filteredProperties = properties.filter(property => {
    const matchesQuery = query
      ? (property.title && property.title.toLowerCase().includes(query)) ||
        (property.city && property.city.toLowerCase().includes(query)) ||
        (property.country && property.country.toLowerCase().includes(query))
      : true;

    const matchesType = type ? property.type && property.type.toLowerCase() === type : true;
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

    return matchesQuery && matchesType && matchesPrice;
  });

  return (
    <Container className="search-results-page">
      <h2>Resultados de búsqueda para "{query}"</h2>
      <Row>
        {filteredProperties.map(property => (
          <Col key={property.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text>{property.city}, {property.country}</Card.Text>
                <Card.Text>Tipo: {property.type}</Card.Text>
                <Card.Text>Precio: ${property.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResultsPage;
