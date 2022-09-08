import { COUNTER } from "../actions/actionTypes";

const initialState = { number: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER:
      return {
        number: parseInt(state.number) + parseInt(action.payload),
      };
    default:
      return state;
  }
};

export default counterReducer;
