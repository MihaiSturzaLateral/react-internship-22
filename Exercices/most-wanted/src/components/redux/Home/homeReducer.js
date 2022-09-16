import { GET_NOTICES } from "./homeTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTICES:
      //console.log(payload, "Notices");
      return payload;
    default:
      return state;
  }
};
export default reducer;
