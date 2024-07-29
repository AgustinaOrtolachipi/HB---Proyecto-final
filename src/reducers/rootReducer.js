import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import propertiesReducer from './propertiesReducer'; // Importa el nuevo reducer

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  properties: propertiesReducer, // Añade el nuevo reducer
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
