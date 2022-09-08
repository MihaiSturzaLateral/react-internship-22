import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducers/contactReducer";

export default configureStore({
  reducer: contactReducer,
});
