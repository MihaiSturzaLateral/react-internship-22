import {
  LOAD_DATA_BY_LAT_LONG,
  LOAD_DATA_BY_CITY,
} from "../actions/actionTypes";

const initialState = { weatherData: null };

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_BY_LAT_LONG:
      return { weatherData: action.payload };
    case LOAD_DATA_BY_CITY:
      return { weatherData: action.payload };
    default:
      return state;
  }
};
