
import React from 'react';
import { useSelector } from 'react-redux';
import ResidenceList from '../components/ResidenceList';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h2>Favoritos</h2>
      <ResidenceList residences={favorites} />
    </div>
  );
};

export default FavoritesPage;
