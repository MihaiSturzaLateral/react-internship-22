export const ActionTypes = {
    ADD_CONTACT: "ADD_CONTACT",
    DELETE_CONTACT: "DELETE_CONTACT",
    UPDATE_CONTACT: "UPDATE_CONTACT",
    GET_CONTACTS: "GET_CONTACTS",
    SEARCH_CONTACT: "SEARCH_CONTACT",
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
  export const updateContact = ({ name, email, message, id }) => {
    return {
      type: ActionTypes.UPDATE_CONTACT,
      payload: {
        name,
        email,
        message,
        id,
      },
    };
  };
  export const searchContact = (name) => {
    return {
      type: ActionTypes.SEARCH_CONTACT,
      payload: name,
    };
  };