import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Read/Read.css";

const Read = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud")
      .then((getData) => {
        setPost(getData.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const Delete = (id) => {
    axios
      .delete("https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud")
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="header">
        <button className="buttonBack" onClick={() => navigate(-1)}>
          {" "}
          {"<= Go Back"}
        </button>
        <h1>Data API</h1>
      </div>
      <section>
        <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Message</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {post?.map((values, key) => {
            return (
              <tr key={key}>
                <td>{values.id}</td>
                <td>{values.email}</td>
                <td>{values.name}</td>
                <td>{values.message}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate("/Update", {
                        state: {
                          email: values.email,
                          name: values.name,
                          message: values.message,
                          id: values.id,
                        },
                      })
                    }
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => Delete(values.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
};
export default Read;
