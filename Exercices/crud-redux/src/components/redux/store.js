import reducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;