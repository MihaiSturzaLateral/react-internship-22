import { combineReducers } from "redux";
import reducer from "./Home/homeReducer";
import reducerReport from "./Reports/reportsReducer";

const rootReducer = combineReducers({
  notices: reducer,
  reports: reducerReport,
});
export default rootReducer;
