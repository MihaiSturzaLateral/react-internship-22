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
        dataArray: [ ...payload],
        totalNum: action.totalNum,
      };
    }

    default:
      return state;
  }
};
