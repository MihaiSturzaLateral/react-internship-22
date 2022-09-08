import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/reducers/counterReducer";

export default configureStore({
  reducer: counterReducer,
});
