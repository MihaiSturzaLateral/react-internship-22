import { COUNT } from "./typesCount";
const initialState = {
  number: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT:
      return {
        //...state,
        number: parseInt(state.number + parseInt(action.payload)),
      };
    default:
      return state;
  }
};

export default countReducer;