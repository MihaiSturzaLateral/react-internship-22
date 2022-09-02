import { types } from "../actions/types";

const initialState = { payload: null, latitude: null, longitude: null };

export const dataReducers = (state = initialState, action) => {
  const { type, payload, latitude, longitude, city } = action;

  switch (type) {
    case types.GET_LOCATION_COORDINATES: {
      return {
        ...state,
        latitude: latitude,
        longitude: longitude,
        city: city,
      };
    }
    case types.LOAD_DATA_BY_CITY: {
      return { ...state, ...payload };
    }
    case types.LOAD_DATA_BY_LAT_LONG: {
      return { ...state, ...payload };
    }

    default:
      return state;
  }
};
