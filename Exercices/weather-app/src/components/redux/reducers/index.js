import { combineReducers } from "redux";
import { dataReducers } from "./dataReducers";

const reducers = combineReducers({ weather: dataReducers });
export default reducers;
