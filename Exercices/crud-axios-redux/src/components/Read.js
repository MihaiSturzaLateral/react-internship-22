import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteContactAction } from "../Actions/creators";
import { getContactsAction } from "../Actions/creators";

const Read = () => {
  let dispatch = useDispatch();
  const { contacts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  const getData = () => {
    dispatch(getContactsAction());
  };

  const onDelete = (id) => {
    deleteContactAction(id)(dispatch)
      .then(() => getData())
      .catch((err) => console.error(err));
  };

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
          {contacts.map((person, key) => {
            return (
              <Table.Row style={{ color: "#fff" }} key={key}>
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
                    onClick={() => onDelete(person.id)}
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
