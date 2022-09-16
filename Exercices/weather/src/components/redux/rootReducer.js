import { combineReducers } from "redux";
import reducer from "../redux/pageReducer";

const rootReducer = combineReducers({
  weather: reducer,
});
export default rootReducer;
