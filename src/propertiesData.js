const propertiesData = [
  {
    id: 1,
    title: 'Casa Johnson',
    price: 5000,
    description: 'Esta es una casa increíble para vivir con todas las facilidades a su alrededor.',
    image: './images/villa-casa-1.jpg',
    country: 'EEUU',
    city: 'Nueva York',
    type: 'house', // Tipo de alojamiento
  },
  {
    id: 2,
    title: 'Villa Jansheen',
    price: 8000,
    description: 'Villa es una maravilla de lujo y arte. Decorada con dos helipuertos, wi...',
    image: './images/villa-casa-2.jpg',
    country: 'EEUU',
    city: 'Los Ángeles',
  },
  {
    id: 3,
    title: 'Maravilla Moderna',
    price: 2000,
    description: 'Oportunidad masiva para construir la casa de tus sueños al pie de Mummy Mountain en...',
    image: './images/villa-casa-3.jpg',
    country: 'EEUU',
    city: 'San Francisco',
  },
  {
    id: 4,
    title: 'Villa con Vista al Mar',
    price: 10000,
    description: 'Espectacular villa con vista al mar y acceso privado a la playa.',
    image: './images/casa 4.jpg',
    country: 'EEUU',
    city: 'Miami',
  },
  {
    id: 5,
    title: 'Retiro en la Montaña',
    price: 7500,
    description: 'Un retiro tranquilo en las montañas con vistas impresionantes.',
    image: './images/casa 5.jpg',
    country: 'EEUU',
    city: 'Denver',
  },
  {
    id: 6,
    title: 'Apartamento en el Centro',
    price: 3000,
    description: 'Moderno apartamento en el corazón de la ciudad, cerca de todas las comodidades.',
    image: './images/casa 6.jpg',
    country: 'EEUU',
    city: 'Chicago',
  },
  {
    id: 7,
    title: 'Finca en el Campo',
    price: 12000,
    description: 'Amplia finca con hermosos jardines y un lago privado.',
    image: './images/casa 7.jpg',
    country: 'EEUU',
    city: 'Dallas',
  },
  {
    id: 8,
    title: 'Casa de Playa',
    price: 9000,
    description: 'Encantadora casa de playa con acceso directo a la arena y al mar.',
    image: './images/casa 8.jpg',
    country: 'EEUU',
    city: 'San Diego',
  },
  {
    id: 9,
    title: 'Ático de Lujo',
    price: 15000,
    description: 'Ático exclusivo con vistas panorámicas de la ciudad y comodidades de alta gama.',
    image: './images/casa 9.jpg',
    country: 'EEUU',
    city: 'Nueva York',
  },
  {
    id: 10,
    title: 'Mansión Histórica',
    price: 11000,
    description: 'Hermosa mansión histórica restaurada con comodidades modernas.',
    image: './images/casa 10.jpg',
    country: 'EEUU',
    city: 'Boston',
  },
  {
    id: 11,
    title: 'Oasis del Desierto',
    price: 6000,
    description: 'Un oasis tranquilo en el desierto con impresionantes vistas al atardecer.',
    image: './images/casa 11.jpg',
    country: 'EEUU',
    city: 'Phoenix',
  },
  {
    id: 12,
    title: 'Casa Familiar en los Suburbios',
    price: 4000,
    description: 'Espaciosa casa familiar en un barrio suburbano tranquilo.',
    image: './images/casa 12.jpg',
    country: 'EEUU',
    city: 'Houston',
  },
  {
    id: 13,
    title: 'Loft Urbano',
    price: 3500,
    description: 'Estiloso loft en el centro de la ciudad, perfecto para jóvenes profesionales.',
    image: './images/casa 13.jpg',
    country: 'EEUU',
    city: 'Seattle',
  },
  {
    id: 14,
    title: 'Cabaña Costera',
    price: 7000,
    description: 'Encantadora cabaña junto a la costa con hermosas vistas al océano.',
    image: './images/casa 14.jpg',
    country: 'EEUU',
    city: 'Portland',
  },
  {
    id: 15,
    title: 'Paraíso Tropical',
    price: 13000,
    description: 'Villa de lujo en un paraíso tropical, rodeada de exuberante vegetación.',
    image: './images/casa 15.jpg',
    country: 'EEUU',
    city: 'Honolulu',
  },
  {
    id: 16,
    title: 'Bungalow en el Campo',
    price: 5000,
    description: 'Acogedor bungalow en el campo, perfecto para una escapada tranquila.',
    image: './images/casa 16.jpg',
    country: 'EEUU',
    city: 'Austin',
  },
  {
    id: 17,
    title: 'Condominio Moderno',
    price: 4500,
    description: 'Condominio moderno y elegante con todas las comodidades.',
    image: './images/casa 17.jpg',
    country: 'EEUU',
    city: 'Atlanta',
  },
  {
    id: 18,
    title: 'Villa Junto al Lago',
    price: 9500,
    description: 'Hermosa villa junto al lago con impresionantes vistas al agua.',
    image: './images/casa 18.jpg',
    country: 'EEUU',
    city: 'Orlando',
  },
  {
    id: 19,
    title: 'Cabaña Rústica',
    price: 4000,
    description: 'Encantadora cabaña rústica en el bosque, perfecta para los amantes de la naturaleza.',
    image: './images/casa 19.jpg',
    country: 'EEUU',
    city: 'Nashville',
  },
  {
    id: 20,
    title: 'Casa Adosada Elegante',
    price: 6000,
    description: 'Elegante casa adosada en un barrio prestigioso.',
    image: './images/casa 20.jpg',
    country: 'EEUU',
    city: 'Filadelfia',
  },
  {
    id: 21,
    title: 'Apartamento en la Ciudad',
    price: 3500,
    description: 'Apartamento compacto en la ciudad, perfecto para la vida urbana.',
    image: './images/casa 21.jpg',
    country: 'EEUU',
    city: 'San Francisco',
  },
  {
    id: 22,
    title: 'Chalet en las Montañas',
    price: 8500,
    description: 'Acogedor chalet en las montañas con vistas impresionantes.',
    image: './images/casa 22.jpg',
    country: 'EEUU',
    city: 'Aspen',
  },
  {
    id: 23,
    title: 'Casa Junto al Río',
    price: 7500,
    description: 'Hermosa casa junto al río con vistas impresionantes.',
    image: './images/casa 23.jpg',
    country: 'EEUU',
    city: 'Sacramento',
  },
  {
    id: 24,
    title: 'Suite Ático',
    price: 14000,
    description: 'Exclusiva suite ático con comodidades de lujo.',
    image: './images/casa 24.jpg',
    country: 'EEUU',
    city: 'Nueva York',
  },
  {
    id: 25,
    title: 'Rancho Suburbano',
    price: 6500,
    description: 'Amplia casa estilo rancho en un barrio suburbano.',
    image: './images/casa 25.jpg',
    country: 'EEUU',
    city: 'Charlotte',
  }
];

export default propertiesData;





  