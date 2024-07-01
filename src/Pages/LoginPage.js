import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <Container className="login-page">
      <h2>Iniciar Sesión</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
