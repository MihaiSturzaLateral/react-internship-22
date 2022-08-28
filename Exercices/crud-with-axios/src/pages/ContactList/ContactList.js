import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

function ContactList() {
  const [contactList, setContactList] = useState([]);
  const [reloadPage, setReloadPage] = useState("false");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://630120369a1035c7f8fe63c1.mockapi.io/crud")
      .then((res) => {
        setContactList(res.data);
        setReloadPage("false");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadPage]);
  const deleteElement = (id) => {
    axios.delete(`https://630120369a1035c7f8fe63c1.mockapi.io/crud/${id}`);
    setReloadPage("true");
    setSearch("");
  };
  const searchFunction = () => {
    axios
      .get(`https://630120369a1035c7f8fe63c1.mockapi.io/crud?name=${search}`)
      .then((res) => {
        setContactList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(search);
  return (
    <>
      <NavBar
        title="Contact List"
        btn="Go Back"
        classN="btn btn-warning"
        path="/"
      />
      <div className="container-sm">
        <div className="input-group mb-4 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Search by name"
            aria-describedby="button-addon2"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-info"
            type="submit"
            id="button-addon2"
            onClick={() => {
              searchFunction();
            }}
          >
            Search
          </button>
        </div>
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((list) => {
              return (
                <tr key={list.id}>
                  <th scope="row">{list.id}</th>
                  <td>{list.email}</td>
                  <td>{list.name}</td>
                  <td>{list.message}</td>
                  <td>
                    <Link
                      to="/pages/ContactList/UpdateContactList"
                      state={{
                        id: list.id,
                        email: list.email,
                        name: list.name,
                        message: list.message,
                      }}
                      className="btn btn-success ms-3"
                    >
                      Update
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger ms-3"
                      onClick={() => {
                        deleteElement(list.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContactList;
