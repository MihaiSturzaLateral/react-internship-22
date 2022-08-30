import { combineReducers } from "redux";
import reducer from "./Contact/contactReducer";

const rootReducer = combineReducers({
  contacts: reducer,
});
export default rootReducer;
