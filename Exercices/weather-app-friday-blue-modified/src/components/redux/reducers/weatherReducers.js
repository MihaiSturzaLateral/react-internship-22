const initialState = { payload: null, latitude: null, longitude: null };

const weatherReducers = (state = initialState, action) => {
  const { type, payload, latitude, longitude, city } = action;
  switch (type) {
    case "LOAD_DATA_BY_LAT":
      return { ...state, ...payload };
    case "LOAD_DATA_BY_CITY":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default weatherReducers;
