import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div className="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="home-title">Descubra la mejor propiedad para usted.</h1>
            <p className="home-subtitle">
              Encuentre una variedad de propiedades que se adapten a sus necesidades muy fácilmente.
            </p>
            <Form className="search-bar">
              <Form.Control
                type="text"
                placeholder="Buscar por título/ciudad/país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button onClick={handleSearch} className="search-button">Buscar</Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img src="/images/property-image.jpg" alt="Property" className="home-image" />
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
