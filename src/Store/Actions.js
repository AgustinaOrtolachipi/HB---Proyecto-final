
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = residence => ({
  type: ADD_TO_FAVORITES,
  payload: residence,
});

export const removeFromFavorites = residenceId => ({
  type: REMOVE_FROM_FAVORITES,
  payload: residenceId,
});
