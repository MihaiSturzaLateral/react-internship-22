import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./reducers/weatherReducer";
import logger from "redux-logger";

export default configureStore({
  reducer: weatherReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
