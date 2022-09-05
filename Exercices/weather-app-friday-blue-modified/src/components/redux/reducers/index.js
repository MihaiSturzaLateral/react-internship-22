import weatherReducers from "./weatherReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  weather: weatherReducers,
});

export default reducers;
