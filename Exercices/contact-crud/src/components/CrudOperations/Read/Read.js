import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteContact,
  actionGetContacts,
} from "../Redux/Contact/contactActions";
import "../Read/Read.css";

const Read = () => {
  let dispatch = useDispatch();
  const { contacts } = useSelector((state) => state);
  const navigate = useNavigate();

  const getData = () => {
    dispatch(actionGetContacts());
  };

  useEffect(() => {
    dispatch(actionGetContacts());
  }, []);

  const Delete = (id) => {
    actionDeleteContact(id)(dispatch)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>
      <div className="header">
        <button className="buttonBack" onClick={() => navigate(-1)}>
          {" "}
          {"<= Go Back"}
        </button>
        <h1>Read</h1>
      </div>
      <section>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Name</th>
              <th>Message</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </tbody>
          <tbody>
            {contacts?.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.message}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate("/Update", {
                          state: {
                            updatedId: data.id,
                            updatedEmail: data.email,
                            updatedName: data.name,
                            updatedMessage: data.message,
                          },
                        })
                      }
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => Delete(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Read;
