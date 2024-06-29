import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="login-form">
            <h2>Bienvenido</h2>
            <p>Inicia sesión para continuar</p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Direccion de Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">Continuar</Button>
            </Form>
            <a href="/forgot-password">Olvidaste tu contraseña?</a>
            <p>Aun no tienes una cuenta? <a href="/signup">Sign up</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
