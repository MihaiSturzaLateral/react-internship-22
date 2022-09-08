import { configureStore } from "@reduxjs/toolkit";
import { noticesReducer } from "./reducers/noticesReducer";

export default configureStore({
  reducer: noticesReducer,
});
