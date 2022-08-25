import { types } from "../actions/contactTypes";

const initialState = [];

export const contactReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CONTACT: {
      return [...state, payload];
    }
    case types.GET_CONTACTS: {
      return payload;
    }
    case types.UPDATE_CONTACT: {
      return state.map((contact) => {
        if (contact.id === payload.id) {
          return { ...contact, ...payload };
        } else {
          return contact;
        }
      });
    }
    case types.DELETE_CONTACT:{
        return state.filter(({id})=>id!==payload);
    }
    default:
      return state;
  }
};
