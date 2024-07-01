import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejar la lógica para agregar una propiedad
    console.log('Property added:', formData);
  };

  return (
    <Container>
      <h2>Agregar Propiedad</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCountry">
          <Form.Label>Pais</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Próximo paso</Button>
      </Form>
    </Container>
  );
};

export default AddPropertyPage;
