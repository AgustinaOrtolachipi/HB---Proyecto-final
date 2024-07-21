import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
