import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData`)
      .then((res) => {
        setApiData(res.data);
      });
  }, []);

  const setData = (data) => {
    let { id, email, name, message, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Email", email);
    localStorage.setItem("Name", name);
    localStorage.setItem("Message", message);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="row">ID</Table.HeaderCell>
            <Table.HeaderCell className="row">Email</Table.HeaderCell>
            <Table.HeaderCell className="row">Name</Table.HeaderCell>
            <Table.HeaderCell className="row">Message</Table.HeaderCell>
            <Table.HeaderCell className="row">Checked</Table.HeaderCell>
            <Table.HeaderCell className="row">Update</Table.HeaderCell>
            <Table.HeaderCell className="row">Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell className="column">{data.id}</Table.Cell>
                <Table.Cell className="column">{data.email}</Table.Cell>
                <Table.Cell className="column">{data.name}</Table.Cell>
                <Table.Cell className="column">{data.message}</Table.Cell>
                <Table.Cell className="column">
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to={{
                      pathname: "/update",
                    }}
                  >
                    <Button className="upbtn" onClick={() => setData(data)}>
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button className="delbtn" onClick={() => onDelete(data.id)}>
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
