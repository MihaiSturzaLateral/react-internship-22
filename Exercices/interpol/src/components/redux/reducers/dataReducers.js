import { update_report } from "../actions/dataActions";
import { types } from "../actions/dataTypes";

const initialState = { dataArray: [], totalNum: 0 };

export const dataReducer = (state = initialState, action) => {
  const { type, payload, totalNum } = action;

  switch (type) {
    case types.GET_PERSONS: {
      //console.log("get_totalll,", {...state, payload, totalNum});
      return {
        ...state,
        dataArray: [...payload],
        totalNum,
      };
    }
    case types.GET_ALL: {
      console.log("get_All,", { ...state, ...payload, totalNum });
      //console.log("payload ", payload);
      return {
        ...state,
        dataArray: [...payload],
        totalNum: action.totalNum,
      };
    }
    case types.ADD_REPORT: {
      return payload;
    }
    case types.GET_REPORTS: {
      console.log("get reports", payload);
      return payload;
    }
    case types.DELETE_REPORT: {
      return state.filter((id) => id !== payload);
    }
    case types.UPDATE_REPORT: {
      return state.map((report) => {
        if (report.id === payload.id) {
          return { ...report, ...payload };
        } else {
          return report;
        }
      });
    }

    default:
      return state;
  }
};
