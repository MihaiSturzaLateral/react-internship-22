import { Count } from "./action";

const initialState = {
  countValue: 0,
};
export const reducerCount = (state = initialState, action) => {
  switch (action.type) {
    case Count:
      return {
        ...state,
        countValue: parseInt(state.countValue) + parseInt(action.payload),
      };
    default:
      return state;
  }
};
