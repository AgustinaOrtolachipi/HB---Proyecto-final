import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (query) searchParams.set('query', query);
    if (type) searchParams.set('type', type);
    if (minPrice) searchParams.set('minPrice', minPrice);
    if (maxPrice) searchParams.set('maxPrice', maxPrice);
    navigate(`/search-results?${searchParams.toString()}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Tipo de alojamiento</option>
        <option value="house">Casa</option>
        <option value="apartment">Apartamento</option>
        <option value="villa">Villa</option>
        <option value="cabin">Cabaña</option>
      </select>
      <input
        type="number"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
