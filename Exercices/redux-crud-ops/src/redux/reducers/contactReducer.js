import {
  ADD_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/actionTypes";

const initialState = [];

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case GET_CONTACTS:
      return payload;
    case UPDATE_CONTACT:
      return state.map((contact) => {
        if (contact.id === payload.id) {
          return { ...contact, ...payload };
        } else {
          return contact;
        }
      });
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
