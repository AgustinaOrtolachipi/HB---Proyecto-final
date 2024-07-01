import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = ({ properties }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query').toLowerCase();

  const filteredProperties = properties.filter(
    property =>
      property.title.toLowerCase().includes(query) ||
      property.city.toLowerCase().includes(query) ||
      property.country.toLowerCase().includes(query)
  );

  return (
    <Container className="search-results-page">
      <h2>Resultados de búsqueda para "{query}"</h2>
      <Row>
        {filteredProperties.slice(0, 5).map(property => (
          <Col key={property.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResultsPage;
