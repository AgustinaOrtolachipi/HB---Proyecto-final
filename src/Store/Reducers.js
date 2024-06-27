
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './Actions';

const initialState = {
  favorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(residence => residence.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
