import axios from "axios";
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./contactActions";

export const getContactsAction = () => {
  return (dispatch) => {
    axios
      .get("https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud")
      .then((response) => {
        dispatch(getContacts(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const addContactAction = (contact) => (dispatch) => {
  const addContactPromise = axios
    .post(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`, contact)
    .then((res) => {
      dispatch(addContact(res.data));
    })
    .catch((err) => console.error(err));
  return addContactPromise;
};

export const deleteContactAction = (id) => (dispatch) => {
  const deleteContactPromise = axios
    .delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
    .then(() => {
      dispatch(deleteContact({ id }));
    })
    .catch((err) => console.error(err));
  return deleteContactPromise;
};

export const updateContactAction =
  (id, { email, name, message }) =>
  (dispatch) => {
    const updateContactPromise = axios
      .put(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`, {
        email,
        name,
        message,
      })
      .then(() => {
        dispatch(updateContact({ id, email, name, message }));
      })
      .catch((err) => console.error(err));
    return updateContactPromise;
  };
