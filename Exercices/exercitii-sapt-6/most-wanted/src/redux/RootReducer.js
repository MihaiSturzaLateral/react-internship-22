import { combineReducers } from "redux";
import { flagsReducer } from "./flags/FlagsReducer";
import { myReportsReducer } from "./myReports/MyReportsReducer";
import { reportsReducer } from "./reports/ReportsReducer";

export const rootReducer = combineReducers({
	myReports: myReportsReducer,
	reports: reportsReducer,
	flags: flagsReducer,
});
