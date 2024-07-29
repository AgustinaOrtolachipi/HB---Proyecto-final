export const ADD_PROPERTY = 'ADD_PROPERTY';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addProperty = (property) => ({
  type: ADD_PROPERTY,
  payload: property,
});

export const addToFavorites = (property) => ({
  type: ADD_TO_FAVORITES,
  payload: property,
});

export const removeFromFavorites = (propertyId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: propertyId,
});
