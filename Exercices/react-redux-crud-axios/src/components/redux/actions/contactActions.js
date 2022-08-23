export const ActionTypes = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  UPDATE_CONTACT: 'UPDATE_CONTACT',
  GET_CONTACTS: 'GET_CONTACTS',
};

export const getContacts = (contacts) => {
  return {
    type: ActionTypes.GET_CONTACTS,
    payload: contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: ActionTypes.DELETE_CONTACT,
    payload: id,
  };
};
export const updateContact = ({ firstName, lastName, id }) => {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    payload: {
      firstName,
      lastName,
      id,
    },
  };
};
