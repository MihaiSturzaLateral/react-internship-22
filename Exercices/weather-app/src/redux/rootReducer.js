import { combineReducers } from "redux";
import weatherDataReducer from "./reducer";

const rootReducer = combineReducers({
  data: weatherDataReducer,
});

export default rootReducer;
