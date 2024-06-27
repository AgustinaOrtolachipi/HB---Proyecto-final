import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'; 

const PropertyCarousel = () => {
  const properties = [
    {
      src: 'https://gpvivienda.com/blog/wp-content/uploads/2023/03/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash-1.jpg',
      alt: 'Propiedad 1',
      caption: 'Propiedad 1',
      description: 'Descripción de la propiedad 1'
    },
    {
      src: 'https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg',
      alt: 'Propiedad 2',
      caption: 'Propiedad 2',
      description: 'Descripción de la propiedad 2'
    },
    {
      src: 'https://www.casadecampo.com.do/wp-content/uploads/2019/05/GDV-3-GOLF-AZUL-3-1350x760.jpg',
      alt: 'Propiedad 3',
      caption: 'Propiedad 3',
      description: 'Descripción de la propiedad 3'
    }
  ];

  return (
    <Carousel>
      {properties.map((property, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={property.src}
            alt={property.alt}
          />
          <Carousel.Caption>
            <h3>{property.caption}</h3>
            <p>{property.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PropertyCarousel;
