import { combineReducers } from "redux";

import personReducer from "./reducer";

const rootReducer = combineReducers({
  data: personReducer,
});

export default rootReducer;
