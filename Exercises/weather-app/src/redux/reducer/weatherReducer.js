const initialState = {
  data: [],
  latitude: null,
  longitude: null,
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_BY_LAT_LONG":
      return { ...state, data: action.payload };
    case "LOAD_DATA_BY_CITY":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_LOCATION_COORDINATES":
      return {
        ...state,
        latitude: action.payload.lat,
        longitude: action.payload.long,
      };
    default:
      return state;
  }
};

export default weatherReducer;
