import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const apiData = () => {
    axios
      .get(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    apiData();
  }, []);
  const deleteInput = (id) => {
    axios
      .delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
      .then(() => apiData());
  };
  console.log(data);
  return (
    <div
      style={{ width: "100%", height: "calc(100vh - 75px)", margin: "0 auto" }}
    >
      <Table celled>
        <Table.Header>
          <Table.Row style={{ color: "#eee" }}>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Message</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((person) => {
            return (
              <Table.Row style={{ color: "#fff" }} key={person.id}>
                <Table.Cell>{person.id}</Table.Cell>
                <Table.Cell>{person.name}</Table.Cell>
                <Table.Cell>{person.email}</Table.Cell>
                <Table.Cell>{person.message}</Table.Cell>
                <Table.Cell>
                  <Link
                    to="/update"
                    state={{
                      idUpdate: person.id,
                      emailUpdate: person.email,
                      nameUpdate: person.name,
                      messageUpdate: person.message,
                    }}
                  >
                    <Button className="btn btn-primary" id="update">
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteInput(person.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
