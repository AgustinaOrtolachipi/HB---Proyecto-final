import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const LoginPage = () => (
  <Container className="mt-5">
    <h2>Login</h2>
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Login</Button>
    </Form>
  </Container>
);

export default LoginPage;
