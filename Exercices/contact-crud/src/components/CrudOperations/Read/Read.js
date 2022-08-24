import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Read/Read.css";

const Read = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud")
      .then((getData) => {
        setPost(getData.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const Delete = (id) => {
    axios
      .delete(
        `https://6306153fdde73c0f84527f22.mockapi.io/crud-operations/Crud/${id}`
      )
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
        <h1>Read</h1>
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
          {post?.map((data, key) => {
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
        </table>
      </section>
    </>
  );
};
export default Read;
