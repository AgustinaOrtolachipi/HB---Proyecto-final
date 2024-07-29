import { ADD_PROPERTY } from '../actions/Actions';

const initialState = {
  properties: [],
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
      };
    default:
      return state;
  }
};

export default propertiesReducer;
