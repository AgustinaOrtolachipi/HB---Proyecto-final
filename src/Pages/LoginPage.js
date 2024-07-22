import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    // Check if user credentials are stored in localStorage
    const storedEmail = localStorage.getItem('rememberEmail');
    const storedPassword = localStorage.getItem('rememberPassword');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const registerLink = () => {
    setAction(' active');
    setMessage(null); // Clear message when switching forms
  };

  const loginLink = () => {
    setAction('');
    setMessage(null); // Clear message when switching forms
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setMessageType('success');
      setMessage('Inicio de sesión exitoso');
      if (rememberMe) {
        localStorage.setItem('rememberEmail', email);
        localStorage.setItem('rememberPassword', password);
      } else {
        localStorage.removeItem('rememberEmail');
        localStorage.removeItem('rememberPassword');
      }
      // Aquí puedes redirigir al usuario a la página principal o mostrar un mensaje de éxito.
    } else {
      setMessageType('danger');
      setMessage('Correo electrónico o contraseña incorrectos. Por favor intente nuevamente o regístrese.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      setMessageType('danger');
      setMessage('El usuario ya existe. Por favor inicie sesión.');
    } else {
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setMessageType('success');
      setMessage('Registro exitoso. Ahora puede iniciar sesión.');
      setAction(''); // Switch to login form after successful registration
    }
  };

  const handleForgotPassword = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);
    if (user) {
      setMessageType('success');
      setMessage('Se ha enviado un correo electrónico para restablecer su contraseña.');
    } else {
      setMessageType('danger');
      setMessage('El correo electrónico no está registrado.');
    }
  };

  return (
    <Container className={`wrapper${action}`}>
      <div className={`form-box login${action ? '' : ' active'}`}>
        <Form onSubmit={handleLogin}>
          <h1>Iniciar Sesión</h1>
          {message && messageType === 'success' && <Alert variant="success">{message}</Alert>}
          {message && messageType === 'danger' && <Alert variant="danger">{message}</Alert>}
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
            <Form.Check 
              type="checkbox" 
              label="Recordarme" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <button type="button" className="link-button" onClick={handleForgotPassword}>Olvidé mi contraseña</button>
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
      <div className={`form-box register${action ? ' active' : ''}`}>
        <Form onSubmit={handleRegister}>
          <h1>Registro</h1>
          {message && messageType === 'success' && <Alert variant="success">{message}</Alert>}
          {message && messageType === 'danger' && <Alert variant="danger">{message}</Alert>}
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
