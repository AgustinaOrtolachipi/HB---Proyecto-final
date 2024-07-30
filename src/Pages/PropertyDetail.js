import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import propertiesData from '../propertiesData';
import './PropertyDetail.css'; // Crear un archivo CSS para estilos adicionales

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id.toString() === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Image src={property.image} fluid />
          <h3>{property.title}</h3>
          <p>${property.price}</p>
          <p>{property.description}</p>
          <p>{property.location}</p>
          <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={[property.lat, property.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[property.lat, property.lng]}>
                <Popup>{property.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col md={4}>
          <h4>Detalles</h4>
          <p>Ciudad: {property.city}</p>
          <p>País: {property.country}</p>
          <Link to="/">
            <Button variant="primary" className="mt-3">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetail;
