import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import propertiesData from '../propertiesData';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const handleSearch = () => {
    const filtered = propertiesData.filter(property =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="search-bar">
            <Form.Control
              type="text"
              placeholder="Search by title/city/country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
            <Button onClick={handleSearch} className="search-button">Buscar</Button>
          </Form>
        </Col>
      </Row>
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
                 Ver más detalles
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertiesPage;
