import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";

const reducers = combineReducers({ contacts: contactReducer });

export default reducers;