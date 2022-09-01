export const getContacts = (contacts) => {
  return {
    type: "GET_CONTACTS",
    payload: contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};

export const updateContact = ({ name, email, message, id }) => {
  return {
    type: "UPDATE_CONTACT",
    payload: {
      name,
      email,
      message,
      id,
    },
  };
};
