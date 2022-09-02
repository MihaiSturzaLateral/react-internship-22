import * as types from "./actionType";

const initialState = {
  weatherData: null,
  weatherDataLogLAt: null,
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA_BY_LOCATION:
      return {
        ...state,
        weatherData: action.payload,
      };
    case types.LOAD_DATA_BY_LAT_LONG:
      return {
        ...state,
        weatherData: action.payload,
      };
    default:
      return state;
  }
};
export default weatherDataReducer;
