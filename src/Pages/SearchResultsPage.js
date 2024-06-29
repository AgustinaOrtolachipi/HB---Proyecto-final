import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import propertiesData from '../propertiesData';
import './SearchResultsPage.css'; // Importar estilos específicos

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get('q');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const filtered = propertiesData.filter(property =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.country.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5); // Mostrar al menos 5 propiedades
    setFilteredProperties(filtered);
  }, [searchTerm]);

  return (
    <Container>
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      <Row>
        {filteredProperties.map((property, index) => (
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
    </Container>
  );
};

export default SearchResultsPage;
