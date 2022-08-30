import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DELETE_CONTACTS,
  UPDATE_CONTACTS,
} from "../Contact/contactTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return payload;

    case ADD_CONTACTS:
      return [...state, payload];

    case DELETE_CONTACTS:
      return state.filter(({ id }) => id !== payload);

    case UPDATE_CONTACTS:
      return state.map((contact) => {
        if (contact.id === payload.id) {
          return { ...contact, ...payload };
        } else {
          return contact;
        }
      });
    default:
      return state;
  }
};
export default reducer;
