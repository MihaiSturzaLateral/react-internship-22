import { combineReducers } from "redux";
import { dataReducer } from "./dataReducers";

const reducers = combineReducers({ persons: dataReducer });
export default reducers;
