export default function reqWeatherReducer(state = [], action) {
  if (action.type === "REQUEST_WEATHER") {
    return [action.payload];
  }
  return state;
}
