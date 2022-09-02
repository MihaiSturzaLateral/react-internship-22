import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
