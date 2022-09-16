import {
  GET_REPORTS,
  ADD_REPORTS,
  DELETE_REPORTS,
  UPDATE_REPORTS,
} from "./reportsTypes";

const initialState = [];

const reducerReport = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_REPORTS:
      return payload;

    case ADD_REPORTS:
      return [...state, payload];

    case DELETE_REPORTS:
      return state.filter(({ id }) => id !== payload);

    case UPDATE_REPORTS:
      return state.map((report) => {
        if (report.id === payload.id) {
          return { ...report, ...payload };
        } else {
          return report;
        }
      });
    default:
      return state;
  }
};
export default reducerReport;
