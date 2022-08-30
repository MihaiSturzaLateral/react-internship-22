import axios from "axios";
import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DELETE_CONTACTS,
  UPDATE_CONTACTS,
} from "../Contact/contactTypes";

export const getContacts = (contacts) => {
  return {
    type: GET_CONTACTS,
    payload: contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: ADD_CONTACTS,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACTS,
    payload: id,
  };
};

export const updateContact = ({ email, name, message, id }) => {
  return {
    type: UPDATE_CONTACTS,
    payload: {
      email,
      name,
      message,
      id,
    },
  };
};

export const actionGetContacts = () => {
  return (dispatch) => {
    axios
      .get("https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud")
      .then((response) => {
        dispatch(getContacts(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

export const actionAddContact = (contact) => (dispatch) => {
  const addContactPromise = axios
    .post(
      "https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud",
      contact
    )
    .then((response) => {
      dispatch(addContact(response.data));
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return addContactPromise;
};

export const actionDeleteContact = (id) => (dispatch) => {
  const deleteContactPromise = axios
    .delete(
      `https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud/${id}`
    )
    .then((response) => {
      dispatch(deleteContact(id));
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return deleteContactPromise;
};

export const actionUpdateContact =
  ({ email, name, message }, id) =>
  (dispatch) => {
    const updateContactPromise = axios
      .put(
        `https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud/${id}`,
        { email, name, message }
      )
      .then((response) => {
        dispatch(updateContact({ email, name, message, id }));
      })
      .catch((error) => {
        console.log("Error", error);
      });
    return updateContactPromise;
  };
