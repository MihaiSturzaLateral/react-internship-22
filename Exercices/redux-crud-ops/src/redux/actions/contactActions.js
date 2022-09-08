import axios from "axios";
import {
  ADD_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "./actionTypes";

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const getContacts = (contacts) => {
  return {
    type: GET_CONTACTS,
    payload: contacts,
  };
};

export const updateContact = ({ id, email, name, message }) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      id,
      email,
      name,
      message,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const addContactAction = (contact) => (dispatch) => {
  const addContactPromise = axios
    .post("https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData", contact)
    .then((res) => {
      dispatch(addContact(res.data));
    })
    .catch((error) => {
      console.log("error", error);
    });
  return addContactPromise;
};

export const getContactsAction = () => {
  return (dispatch) => {
    axios
      .get("https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData")
      .then((res) => {
        dispatch(getContacts(res.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const updateContactAction =
  ({ email, name, message }, id) =>
  (dispatch) => {
    const updateContactPromise = axios
      .put(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData/${id}`, {
        email,
        name,
        message,
      })
      .then((res) => {
        dispatch(updateContact({ id, email, name, message }));
      })
      .catch((error) => {
        console.log("error", error);
      });
    return updateContactPromise;
  };

export const deleteContactAction = (id) => (dispatch) => {
  const deleteContactPromise = axios
    .delete(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData/${id}`)
    .then((res) => {
      dispatch(deleteContact(id));
    })
    .catch((error) => {
      console.log("error", error);
    });
  return deleteContactPromise;
};
