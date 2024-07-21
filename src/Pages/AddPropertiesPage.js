import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPropertiesPage = ({ addProperty }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    address: '',
    description: '',
    price: '',
    images: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: Date.now(),  // Usar un id único
      ...formData,
      images: formData.images.length ? URL.createObjectURL(formData.images[0]) : '',
    };
    addProperty(newProperty);
    toast.success('Propiedad agregada exitosamente');
    setTimeout(() => {
      navigate('/properties');
    }, 3000);  // Redirigir después de 3 segundos
  };

  return (
    <Container>
      <h2>Agregar Propiedad</h2>
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <Form.Group controlId="formCountry">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" onClick={handleNextStep}>Próximo paso</Button>
          </>
        )}
        {step === 2 && (
          <>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="secondary" onClick={handlePreviousStep}>Paso anterior</Button>
            <Button variant="primary" onClick={handleNextStep}>Próximo paso</Button>
          </>
        )}
        {step === 3 && (
          <>
            <Form.Group controlId="formImages">
              <Form.Label>Cargar Imágenes</Form.Label>
              <Form.Control
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            <Button variant="secondary" onClick={handlePreviousStep}>Paso anterior</Button>
            <Button variant="primary" type="submit">Agregar Propiedad</Button>
          </>
        )}
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddPropertiesPage;
