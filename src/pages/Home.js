import React from 'react';
import PropertyCarousel from '../components/Carousel';

const Home = () => (
  <div className="container mt-5">
    <h2>Propiedades</h2>
    <PropertyCarousel />
    <div className="mt-5">
      <h3>Listado de Propiedades</h3>
      {/* agregar el componente ResidenceList o cualquier otro contenido */}
    </div>
  </div>
);

export default Home;
