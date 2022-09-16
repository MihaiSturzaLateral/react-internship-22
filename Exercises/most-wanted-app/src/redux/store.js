import dataSlice from "./features/dataSlice";
import dataYellowSlice from "./features/dataYellowSlice";
import { configureStore } from "@reduxjs/toolkit";
import reducerReport from "./reducerReport";

const store = configureStore({
  reducer: {
    data: dataSlice,
    dataYellow: dataYellowSlice,
    report: reducerReport,
    devTools: true,
  },
});

export default store;
