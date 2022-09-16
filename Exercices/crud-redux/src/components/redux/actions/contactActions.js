import { types } from "./contactTypes";

export const add_contact = (contact) => {
  return {
    type: types.ADD_CONTACT,
    payload: contact,
  };
};

export const get_contact = (contacts) => {
  return {
    type: types.GET_CONTACTS,
    payload: contacts,
  };
};
export const update_contact = ({ id, email, name, message }) => {
  return {
    type: types.UPDATE_CONTACT,
    payload: {
      id,
      email,
      name,
      message,
    },
  };
};
export const delete_contact = (id) => {
  return {
    type: types.DELETE_CONTACT,
    payload: id,
  };
};