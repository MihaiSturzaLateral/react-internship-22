import { combineReducers } from "redux";
import { reducer } from "./Reducer";

export const rootReducer = combineReducers({
	contacts: reducer,
});