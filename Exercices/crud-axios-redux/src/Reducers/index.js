import { contactReducer } from "./contactReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  contacts: contactReducer,
});

export default reducers;
