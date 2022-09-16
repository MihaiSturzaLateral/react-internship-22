import { GET_LOCATION } from "./pageTypes";
import { GET_COORDINATES } from "./pageTypes";
import { GET_CITY } from "./pageTypes";

const initialState = {
  weather: [],
  latitude: null,
  longitude: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOCATION:
      console.log(payload, "Weather");
      return payload;
    case GET_COORDINATES:
      console.log(payload, "Coordinates");
      return {
        latitude: action.payload.lat,
        longitude: action.payload.lon,
      };
    case GET_CITY:
      console.log(payload, "City");
      return payload;
    default:
      return state;
  }
};
export default reducer;
