import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./read.css";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const setId = (id) => {
    console.log(id);
    localStorage.setItem("ID", id);
  };
  useEffect(() => {
    axios
      .get(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);
  const getData = () => {
    axios
      .get(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="div-Table">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Message</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.message}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      style={{ backgroundColor: "green" }}
                      onClick={() => setId(data.id)}
                    >
                      UPDATE
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/delete">
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={() => onDelete(data.id)}
                    >
                      DELETE
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
