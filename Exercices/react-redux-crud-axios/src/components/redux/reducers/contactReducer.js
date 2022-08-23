import { ActionTypes } from '../actions/contactActions';

const initialState = [];

export const contactReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_CONTACTS:
      return payload;
    case ActionTypes.ADD_CONTACT:
      return [...state, payload];
    case ActionTypes.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    case ActionTypes.UPDATE_CONTACT:
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
