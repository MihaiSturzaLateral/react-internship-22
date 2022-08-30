import { types } from "../actions/dataTypes";
const initialState = [];
export const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PERSONS: {
      return payload;
    }
    case types.GET_ALL: {
        return payload;
      }
 
    default:
      return state;
  }
};
