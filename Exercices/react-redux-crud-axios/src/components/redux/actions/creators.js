import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactActions';
import axios from 'axios';

export const getAllContacts = () => {
  return (dispatch) => {
    axios
      .get('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud')
      .then((response) => {
        dispatch(getContacts(response.data));
      })
      .catch((error) => {
        console.log('eror', error);
      });
  };
};

export const addContactAction = (contact) => (dispatch) => {
  const addContactPromise = axios
    .post('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud', contact)
    .then((response) => {
      dispatch(addContact(response.data));
    })
    .catch((error) => {
      console.log('eror', error);
    });
  return addContactPromise;
};

export const deleteContactAction = (id) => (dispatch) => {
  const deleteContactPromise = axios
    .delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
    .then((response) => {
      dispatch(deleteContact(id));
    })
    .catch((error) => {
      console.log(error);
    });
  return deleteContactPromise;
};

export const updateContactAction =
  ({ firstName, lastName }, id) =>
  (dispatch) => {
    const updateContactPromise = axios
      .put(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`, {
        firstName,
        lastName,
      })
      .then((response) => {
        dispatch(
          updateContact({
            firstName,
            lastName,
            id,
          })
        );
      })
      .catch((error) => {
        console.log('ERR ', error);
      });
    return updateContactPromise;
  };
