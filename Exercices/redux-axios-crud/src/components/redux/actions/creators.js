import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  searchContact,
} from "./contactActions";
import axios from "axios";

export const getAllContacts = () => {
  return (dispatch) => {
    axios
      .get("https://630120369a1035c7f8fe63c1.mockapi.io/crud")
      .then((response) => {
        dispatch(getContacts(response.data));
      })
      .catch((error) => {
        console.log("eror", error);
      });
  };
};

export const addContactAction = (contact) => (dispatch) => {
  const addContactPromise = axios
    .post("https://630120369a1035c7f8fe63c1.mockapi.io/crud", contact)
    .then((response) => {
      dispatch(addContact(response.data));
    })
    .catch((error) => {
      console.log("eror", error);
    });
  return addContactPromise;
};

export const deleteContactAction = (id) => (dispatch) => {
  const deleteContactPromise = axios
    .delete(`https://630120369a1035c7f8fe63c1.mockapi.io/crud/${id}`)
    .then((response) => {
      dispatch(deleteContact(id));
    })
    .catch((error) => {
      console.log(error);
    });
  return deleteContactPromise;
};

export const updateContactAction =
  ({ name, email, message }, id) =>
  (dispatch) => {
    const updateContactPromise = axios
      .put(`https://630120369a1035c7f8fe63c1.mockapi.io/crud/${id}`, {
        name,
        email,
        message,
      })
      .then((response) => {
        dispatch(
          updateContact({
            name,
            email,
            message,
            id,
          })
        );
      })
      .catch((error) => {
        console.log("ERR ", error);
      });
    return updateContactPromise;
  };
export const searchContact_ = (name) => {
  return (dispatch) => {
    axios
      .get(`https://630120369a1035c7f8fe63c1.mockapi.io/crud?name=${name}`)
      .then((res) => {
        dispatch(searchContact(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
