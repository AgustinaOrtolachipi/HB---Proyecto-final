import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddPropertyPage = () => (
  <Container className="mt-5">
    <h2>Agregar Propiedad</h2>
    <Form>
      <Form.Group controlId="formPropertyName">
        <Form.Label>Nombre de la Propiedad</Form.Label>
        <Form.Control type="text" placeholder="Nombre de la propiedad" />
      </Form.Group>
      <Form.Group controlId="formDescription" className="mt-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descripción" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Agregar</Button>
    </Form>
  </Container>
);

export default AddPropertyPage;
