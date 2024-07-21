import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:300/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className={`wrapper${action}`}>
      <div className="form-box login">
        <Form onSubmit={handleLogin}>
          <h1>Iniciar Sesión</h1>
          <Form.Group controlId="formBasicEmail" className="input-box">
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="input-box">
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </Form.Group>
          <div className="remember-forgot">
            <Form.Check type="checkbox" label="Recordarme" />
            <button type="button" className="link-button" onClick={() => console.log('Forgot password clicked')}>Olvidé mi contraseña</button>
          </div>
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
          <div className="register-link">
            <p>
              ¿No tienes una cuenta? <button type="button" className="link-button" onClick={registerLink}>Regístrate</button>
            </p>
          </div>
        </Form>
      </div>
      <div className="form-box register">
        <Form onSubmit={handleRegister}>
          <h1>Registro</h1>
          <Form.Group controlId="formBasicUsername" className="input-box">
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="input-box">
            <Form.Control
              type="email"
              placeholder="Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="input-box">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </Form.Group>
          <div className="remember-forgot">
            <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </div>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
          <div className="register-link">
            <p>
              ¿Ya tienes una cuenta? <button type="button" className="link-button" onClick={loginLink}>Iniciar Sesión</button>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
