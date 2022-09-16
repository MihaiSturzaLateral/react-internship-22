import axios from "axios";

export default function reqWeather(city) {
  return {
    type: "REQUEST_WEATHER",
    payload: city,
  };
}
