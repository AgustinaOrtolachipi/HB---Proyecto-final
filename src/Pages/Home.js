import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-results?query=${query}`);
  };

  return (
    <div className="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="home-title">Descubra la Propiedad Más Adecuada</h1>
            <p className="home-subtitle">
              Encuentre una variedad de propiedades que se adapten a sus necesidades muy fácilmente.
              Olvídese de todas las dificultades para encontrar una residencia para usted.
            </p>
            <Form className="search-bar" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              <Form.Control
                type="text"
                placeholder="Buscar por título/ciudad/país..."
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" className="search-button">Buscar</Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img src="./images/property-image.jpg" alt="Property" className="home-image img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="home-stats">
          <Col md={4}>
            <h2>9,000+</h2>
            <p>Propiedades de lujo</p>
          </Col>
          <Col md={4}>
            <h2>2,000+</h2>
            <p>Clientes Felices</p>
          </Col>
          <Col md={4}>
            <h2>28+</h2>
            <p>Paises</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
